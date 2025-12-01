# Random Cat Facts & Images 🐱

A fun and interactive web application that displays random cat images with interesting facts using The Cat API. Built with Express.js backend to securely handle API keys.

## Features

- 🐱 Random adorable cat images with breed information
- 📚 Interesting cat facts
- ❤️ Save favorite cats to local storage
- 🎨 Beautiful gradient UI design
- 📱 Fully responsive for all devices
- 🔄 Smooth animations and loading states
- 🔑 Secure API key handling via backend
- ⌨️ Keyboard shortcut (Spacebar) for new cats

## Technologies Used

- **Backend**: Node.js + Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **APIs**: 
  - [The Cat API](https://thecatapi.com/) - Cat images with breed data (requires API key)
  - [Cat Facts API](https://catfact.ninja/) - Random cat facts (no key needed)

## File Structure

```
random_app_render/
│
├── backend/           
│   ├── server.js      # Express backend server
│   ├── package.json   # Backend dependencies
│   └── node_modules/  # Backend packages
├── index.html         # Main HTML structure
├── style.css          # Styling and animations
├── script.js          # Frontend JavaScript
└── README.md          # This file
```

## Setup Instructions

### 1. Get Your Free API Key

1. Go to [The Cat API](https://thecatapi.com/signup)
2. Enter your email address to get a free API key
3. Check your email for the API key
4. Free tier includes 10,000 requests per month!

### 2. Local Development Setup

1. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Set environment variable and start server:**
   
   **Windows (PowerShell):**
   ```powershell
   cd backend
   $env:CAT_API_KEY="your_api_key_here"
   npm start
   ```
   
   **macOS/Linux:**
   ```bash
   cd backend
   export CAT_API_KEY="your_api_key_here"
   npm start
   ```

3. **Open your browser:**
   - Visit `http://localhost:3000`
   - Click "Get Random Cat" or press Spacebar
   - Enjoy cute cats and fun facts!

### 3. Deploy to Render

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Add backend server"
   git push origin main
   ```

2. **Create a new Web Service on Render:**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   
3. **Configure the service:**
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   
4. **Add Environment Variable:**
   - Go to "Environment" tab
   - Add variable:
     - **Key:** `CAT_API_KEY`
     - **Value:** Your actual Cat API key
   
5. **Deploy!**
   - Click "Create Web Service"
   - Wait for deployment to complete (2-3 minutes)
   - Visit your live URL! 🎉

## Security Features

- ✅ API key stored in environment variables
- ✅ Backend handles all external API calls
- ✅ Frontend never accesses API key directly
- ✅ config.js in .gitignore (not pushed to GitHub)
- ✅ Secure for production deployment

## Browser Compatibility

Works on all modern browsers (Chrome, Firefox, Safari, Edge)

## License

This project is open source and free to use.

---

**Discover amazing cats and fun facts!** 🐱✨

