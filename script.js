// ⚠️ IMPORTANT: Replace 'YOUR_API_KEY_HERE' with your actual Cat API key
// Get your free API key at: https://thecatapi.com/signup
// Get API key from config file
const API_KEY = config.CAT_API_KEY;
const CAT_IMAGE_API = 'https://api.thecatapi.com/v1/images/search';
const CAT_FACT_API = 'https://catfact.ninja/fact';

// DOM elements
const catImage = document.getElementById('catImage');
const catFact = document.getElementById('catFact');
const catInfo = document.getElementById('catInfo');
const breedInfo = document.getElementById('breedInfo');
const newCatBtn = document.getElementById('newCatBtn');
const favBtn = document.getElementById('favBtn');
const loading = document.getElementById('loading');

// Store current cat data
let currentCatData = null;

// Check if API key is valid
function validateApiKey() {
    if (API_KEY === 'YOUR_API_KEY_HERE' || !API_KEY || API_KEY.trim() === '') {
        catFact.innerHTML = `
            <strong>⚠️ API Key Required!</strong><br><br>
            This app requires a Cat API key to function.<br><br>
            <strong>Steps to get started:</strong><br>
            1. Visit <a href="https://thecatapi.com/signup" target="_blank">thecatapi.com/signup</a><br>
            2. Enter your email to get a free API key<br>
            3. Open script.js and replace 'YOUR_API_KEY_HERE' with your key<br>
            4. Refresh the page
        `;
        catImage.style.display = 'none';
        newCatBtn.disabled = true;
        favBtn.disabled = true;
        return false;
    }
    return true;
}

// Fetch random cat image from The Cat API
async function getCatImage() {
    try {
        const url = `${CAT_IMAGE_API}?has_breeds=1&api_key=${API_KEY}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                throw new Error('Invalid API key. Please check your API key and try again.');
            }
            throw new Error('Failed to fetch cat image');
        }
        
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error('Error fetching cat image:', error);
        throw error;
    }
}

// Fetch random cat fact
async function getCatFact() {
    try {
        const response = await fetch(CAT_FACT_API);
        
        if (!response.ok) {
            throw new Error('Failed to fetch cat fact');
        }
        
        const data = await response.json();
        return data.fact;
    } catch (error) {
        console.error('Error fetching cat fact:', error);
        throw error;
    }
}

// Get random cat (image + fact)
async function getRandomCat() {
    // Validate API key first
    if (!validateApiKey()) {
        return;
    }

    try {
        // Show loading spinner
        loading.classList.add('active');
        newCatBtn.disabled = true;
        favBtn.disabled = true;

        // Fetch both cat image and fact in parallel
        const [imageData, fact] = await Promise.all([
            getCatImage(),
            getCatFact()
        ]);

        // Store current cat data
        currentCatData = {
            image: imageData.url,
            fact: fact,
            breed: imageData.breeds && imageData.breeds.length > 0 ? imageData.breeds[0] : null
        };

        // Update UI
        displayCat(currentCatData);

    } catch (error) {
        console.error('Error:', error);
        if (error.message.includes('Invalid API key')) {
            catFact.innerHTML = `
                <strong>❌ ${error.message}</strong><br><br>
                Please ensure you have a valid API key from 
                <a href="https://thecatapi.com/signup" target="_blank">thecatapi.com</a>
            `;
        } else {
            catFact.textContent = '❌ Oops! Failed to fetch cat data. Please try again.';
        }
        catImage.style.display = 'none';
    } finally {
        // Hide loading spinner
        loading.classList.remove('active');
        newCatBtn.disabled = false;
        favBtn.disabled = false;
    }
}

// Display cat data in UI
function displayCat(data) {
    // Update image
    catImage.src = data.image;
    catImage.style.display = 'block';
    
    // Update fact
    catFact.textContent = data.fact;
    
    // Update breed info if available
    if (data.breed) {
        breedInfo.textContent = `🐾 Breed: ${data.breed.name}`;
        breedInfo.style.display = 'block';
    } else {
        breedInfo.style.display = 'none';
    }
    
    // Add animation
    catImage.style.animation = 'none';
    setTimeout(() => {
        catImage.style.animation = 'fadeIn 0.5s ease-in';
    }, 10);
}

// Save favorite cat to local storage
function saveFavorite() {
    if (!currentCatData) {
        return;
    }
    
    // Get existing favorites
    let favorites = JSON.parse(localStorage.getItem('favoriteCats') || '[]');
    
    // Add current cat
    favorites.push({
        ...currentCatData,
        savedAt: new Date().toISOString()
    });
    
    // Save to local storage (keep only last 10)
    if (favorites.length > 10) {
        favorites = favorites.slice(-10);
    }
    localStorage.setItem('favoriteCats', JSON.stringify(favorites));
    
    // Show feedback
    const originalText = favBtn.querySelector('span').textContent;
    favBtn.querySelector('span').textContent = '✅ Saved!';
    
    setTimeout(() => {
        favBtn.querySelector('span').textContent = originalText;
    }, 2000);
}

// Event listeners
newCatBtn.addEventListener('click', getRandomCat);
favBtn.addEventListener('click', saveFavorite);

// Load a random cat when the page loads
window.addEventListener('DOMContentLoaded', getRandomCat);

// Optional: Press space to get new cat
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !newCatBtn.disabled) {
        event.preventDefault();
        getRandomCat();
    }
});
