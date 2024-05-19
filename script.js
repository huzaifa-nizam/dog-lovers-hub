document.addEventListener("DOMContentLoaded", () => {
    fetchRandomDogImage();
    fetchDogBreedInfo();
    fetchDogFact();
    generateDogName();
    fetchDogJoke();
    fetchDogHealthTip();
});

async function fetchRandomDogImage() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('dogImage').src = data.message;
    } catch (error) {
        console.error('Error fetching random dog image:', error);
    }
}

async function fetchDogBreedInfo() {
    const url = 'https://api.thedogapi.com/v1/breeds';
    try {
        const response = await fetch(url);
        const breeds = await response.json();
        const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
        document.getElementById('breedName').innerText = randomBreed.name;
        document.getElementById('breedInfoText').innerText = randomBreed.temperament;
    } catch (error) {
        console.error('Error fetching dog breed information:', error);
    }
}

async function fetchDogFact() {
    const url = 'https://some-random-api.ml/facts/dog';
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('factText').innerText = data.fact;
    } catch (error) {
        console.error('Error fetching dog fact:', error);
    }
}

async function generateDogName() {
    const url = 'https://uinames.com/api/?region=united%20states&gender=male';
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('dogNameText').innerText = data.name;
    } catch (error) {
        console.error('Error generating dog name:', error);
    }
}

async function fetchDogJoke() {
    const url = 'https://v2.jokeapi.dev/joke/Any?contains=dog';
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('jokeText').innerText = `${data.setup} - ${data.delivery}`;
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
