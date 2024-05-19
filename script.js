document.addEventListener("DOMContentLoaded", () => {
    fetchDogImageAndBreed();
    fetchDogFact();
    generateDogName();
    fetchDogJoke();
    fetchDogHealthTip();
});

async function fetchDogImageAndBreed() {
    try {
        const breedResponse = await fetch('https://api.thedogapi.com/v1/breeds');
        const breeds = await breedResponse.json();
        const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];

        document.getElementById('breedName').innerText = randomBreed.name;
        document.getElementById('breedInfoText').innerText = randomBreed.temperament;

        const imageResponse = await fetch(`https://dog.ceo/api/breed/${randomBreed.name.toLowerCase().replace(' ', '/')}/images/random`);
        const imageData = await imageResponse.json();
        document.getElementById('dogImage').src = imageData.message;
    } catch (error) {
        console.error('Error fetching dog image and breed:', error);
    }
}

async function fetchDogFact() {
    const url = 'https://dog-api.kinduff.com/api/facts';
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('factText').innerText = data.facts[0];
    } catch (error) {
        console.error('Error fetching dog fact:', error);
    }
}

async function generateDogName() {
    const url = 'https://names.drycodes.com/1?nameOptions=dog_names';
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('dogNameText').innerText = data[0];
    } catch (error) {
        console.error('Error generating dog name:', error);
    }
}

async function fetchDogJoke() {
    const url = 'https://v2.jokeapi.dev/joke/Animal?contains=dog';
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('jokeText').innerText = data.type === "single" ? data.joke : `${data.setup} - ${data.delivery}`;
    } catch (error) {
        console.error('Error fetching dog joke:', error);
    }
}

async function fetchDogHealthTip() {
    const tips = [
        "Regular check-ups with your vet can prevent health issues.",
        "Proper nutrition is key to a healthy dog.",
        "Exercise keeps your dog fit and happy.",
        "Keep your dog's teeth clean to prevent dental issues.",
        "Regular grooming maintains your dog's coat and skin health."
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('healthTipText').innerText = randomTip;
}
