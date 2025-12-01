const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// API Key from environment variable
const CAT_API_KEY = process.env.CAT_API_KEY;

// Serve static files from parent directory (frontend files)
app.use(express.static(path.join(__dirname, '..')));

// API endpoint to get random cat data
app.get('/api/random-cat', async (req, res) => {
    try {
        if (!CAT_API_KEY) {
            return res.status(500).json({ 
                error: 'API key not configured. Please set CAT_API_KEY environment variable.' 
            });
        }

        // Fetch cat image from The Cat API
        const imageResponse = await fetch(
            `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${CAT_API_KEY}`
        );
        
        if (!imageResponse.ok) {
            throw new Error('Failed to fetch cat image from The Cat API');
        }
        
        const imageData = await imageResponse.json();
        
        // Fetch cat fact
        const factResponse = await fetch('https://catfact.ninja/fact');
        
        if (!factResponse.ok) {
            throw new Error('Failed to fetch cat fact');
        }
        
        const factData = await factResponse.json();
        
        // Combine data
        const catData = {
            image: imageData[0].url,
            fact: factData.fact,
            breed: imageData[0].breeds && imageData[0].breeds.length > 0 
                ? imageData[0].breeds[0].name 
                : null
        };
        
        res.json(catData);
    } catch (error) {
        console.error('Error fetching cat data:', error);
        res.status(500).json({ 
            error: 'Failed to fetch cat data',
            message: error.message 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        apiKeyConfigured: !!CAT_API_KEY,
        timestamp: new Date().toISOString()
    });
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🐱 Cat app server running on port ${PORT}`);
    if (!CAT_API_KEY) {
        console.warn('⚠️  WARNING: CAT_API_KEY environment variable is not set!');
    } else {
        console.log('✅ API key configured');
    }
});
