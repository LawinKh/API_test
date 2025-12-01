// Frontend script - calls backend API endpoints
const catImage = document.getElementById('catImage');
const catFact = document.getElementById('catFact');
const catInfo = document.getElementById('catInfo');
const breedInfo = document.getElementById('breedInfo');
const newCatBtn = document.getElementById('newCatBtn');
const favBtn = document.getElementById('favBtn');
const loading = document.getElementById('loading');

let currentCatData = null;

// Fetch random cat from backend
async function getRandomCat() {
    try {
        loading.classList.add('active');
        newCatBtn.disabled = true;
        favBtn.disabled = true;

        // Call backend endpoint instead of external API directly
        const response = await fetch('/api/random-cat');
        
        if (!response.ok) {
            throw new Error('Failed to fetch cat data');
        }

        const data = await response.json();
        currentCatData = data;
        displayCat(data);

    } catch (error) {
        console.error('Error:', error);
        catFact.textContent = '❌ Oops! Failed to fetch cat data. Please try again.';
        catImage.style.display = 'none';
    } finally {
        loading.classList.remove('active');
        newCatBtn.disabled = false;
        favBtn.disabled = false;
    }
}

function displayCat(data) {
    catImage.src = data.image;
    catImage.style.display = 'block';
    catFact.textContent = data.fact;
    
    if (data.breed) {
        breedInfo.textContent = `🐾 Breed: ${data.breed}`;
        breedInfo.style.display = 'block';
    } else {
        breedInfo.style.display = 'none';
    }
    
    catImage.style.animation = 'none';
    setTimeout(() => {
        catImage.style.animation = 'fadeIn 0.5s ease-in';
    }, 10);
}

function saveFavorite() {
    if (!currentCatData) return;
    
    let favorites = JSON.parse(localStorage.getItem('favoriteCats') || '[]');
    favorites.push({
        ...currentCatData,
        savedAt: new Date().toISOString()
    });
    
    if (favorites.length > 10) {
        favorites = favorites.slice(-10);
    }
    localStorage.setItem('favoriteCats', JSON.stringify(favorites));
    
    const originalText = favBtn.querySelector('span').textContent;
    favBtn.querySelector('span').textContent = '✅ Saved!';
    
    setTimeout(() => {
        favBtn.querySelector('span').textContent = originalText;
    }, 2000);
}

newCatBtn.addEventListener('click', getRandomCat);
favBtn.addEventListener('click', saveFavorite);
window.addEventListener('DOMContentLoaded', getRandomCat);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !newCatBtn.disabled) {
        event.preventDefault();
        getRandomCat();
    }
});
