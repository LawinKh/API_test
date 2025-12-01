# Random Cat Facts & Images 🐱

A fun and interactive web application that displays random cat images with interesting facts using The Cat API. Perfect for cat lovers and learning API integration with authentication!

## Features

- 🐱 Random adorable cat images
- 📚 Interesting cat facts
- 🐾 Breed information when available
- ❤️ Save favorite cats to local storage
- 🎨 Beautiful gradient UI design
- 📱 Fully responsive for all devices
- 🔄 Smooth animations and loading states
- 🔑 Demonstrates API key authentication
- ⌨️ Keyboard shortcut (Spacebar) for new cats

## Technologies Used

- HTML5
- CSS3 (with animations and gradients)
- Vanilla JavaScript (ES6+)
- [The Cat API](https://thecatapi.com/) - Cat images with breed data (requires API key)
- [Cat Facts API](https://catfact.ninja/) - Random cat facts (no key needed)

## Setup Instructions

### 1. Get Your Free API Key (Optional but Recommended)

1. Go to [The Cat API](https://thecatapi.com/signup)
2. Enter your email address to get a free API key
3. Check your email for the API key
4. Free tier includes 10,000 requests per month!

**Note**: The app works without an API key, but having one provides better rate limits and access to more features.

### 2. Add Your API Key (Optional)

1. Open `script.js`
2. Find the line: `const API_KEY = 'YOUR_API_KEY_HERE';`
3. Replace `'YOUR_API_KEY_HERE'` with your actual API key
4. Save the file

### 3. Run the App

1. Open `index.html` in your web browser
2. Click "Get Random Cat" or press Spacebar
3. Enjoy cute cats and fun facts!
4. Click "Save Favorite" to save cats you love

## API Information

This app uses two APIs:

### The Cat API
- **Endpoint**: `https://api.thecatapi.com/v1/images/search`
- **Authentication**: API key optional (passed as query parameter)
- **Free Tier**: 10,000 requests/month with API key
- **Documentation**: [The Cat API Docs](https://docs.thecatapi.com/)

### Cat Facts API
- **Endpoint**: `https://catfact.ninja/fact`
- **Authentication**: No API key required
- **Documentation**: [Cat Facts API](https://catfact.ninja/)

## Example API Requests

```javascript
// With API key (recommended)
const url = `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${API_KEY}`;

// Without API key (limited requests)
const url = 'https://api.thecatapi.com/v1/images/search?has_breeds=1';
```

## File Structure

```text
random_app_render/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # JavaScript with dual API integration
└── README.md       # This file
```

## Features Breakdown

### JavaScript Functionality

- Parallel API calls using Promise.all
- Works with or without API key
- Local storage for saving favorites
- Loading states and disabled buttons during fetch
- Dynamic breed display when available
- Keyboard shortcuts (Spacebar for new cat)
- Error handling with user-friendly messages

### CSS Highlights

- Beautiful gradient backgrounds
- Responsive cat image display
- Hover effects on images
- Smooth animations (fadeIn, spin)
- Modern card-based layout
- Mobile-friendly responsive design

## Browser Compatibility

Works on all modern browsers (Chrome, Firefox, Safari, Edge)

## Features In Detail

### Save Favorites
- Click "Save Favorite" to save cats you love
- Stores up to 10 cats in browser local storage
- Includes image, fact, breed, and timestamp

### Keyboard Shortcuts
- Press **Spacebar** to get a new random cat
- Works when button is not disabled

## Deployment

You can deploy this app on:

- **GitHub Pages**: Free static hosting
- **Render**: Free web service hosting
- **Netlify**: Free static site hosting
- **Vercel**: Free hosting for static sites

**Note**: API keys are safe to use in frontend for The Cat API, but consider rate limits.

## Future Enhancements

Possible improvements:

- Browse saved favorites gallery
- Filter by specific cat breeds
- Share cats on social media
- Cat breed encyclopedia
- Vote on favorite cats
- Display cat videos instead of images

## Troubleshooting

- **No image loading**: Check your internet connection
- **Rate limited**: Get a free API key for higher limits
- **Images loading slowly**: Large images may take time on slow connections

## License

This project is open source and free to use.

## Credits

- Cat images from [The Cat API](https://thecatapi.com/)
- Cat facts from [Cat Facts Ninja](https://catfact.ninja/)
- Created as a learning project for JavaScript and multi-API integration

---

**Discover amazing cats and fun facts!** 🐱✨
