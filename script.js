document.addEventListener("DOMContentLoaded", () => {
    fetchDogImageAndBreed();
    fetchDogFact();
    generateDogName();
    fetchDogJoke();
    fetchDogHealthTip();
});

async function fetchDogImageAndBreed() {
    const url = 'https://api.thedogapi.com/v1/images/search';
    try {
        const response = await fetch(url);
        const data = await response.json();
        const dog = data[0];
        const breed = dog.breeds[0];

        document.getElementById('dogImage').src = dog.url;
        if (breed) {
            document.getElementById('breedName').innerText = breed.name;
            document.getElementById('breedInfoText').innerText = breed.temperament;
        } else {
            document.getElementById('breedName').innerText = 'Unknown Breed';
            document.getElementById('breedInfoText').innerText = 'No information available';
        }
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
    const url = 'https://randomuser.me/api/?inc=name';
    try {
        const response = await fetch(url);
        const data = await response.json();
        const name = data.results[0].name.first;
        document.getElementById('dogNameText').innerText = name;
    } catch (error) {
        console.error('Error generating dog name:', error);
