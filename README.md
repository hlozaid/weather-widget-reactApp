# 🌤️ Weather App

A responsive weather application built with **React**, **Vite** and **Material UI**. Search any city in the world and instantly see its current weather, along with a background image and icon that change based on the conditions.

🔗 **Live Demo:** https://hlozaid.github.io/weather-app/

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Shows temperature, min/max temperature, humidity and "feels like"
- 🖼️ Dynamic image and icon for hot, cold and rainy weather
- ⚠️ Error handling for invalid or unknown city names
- 📱 Clean, responsive UI using Material UI components

## 🛠️ Tech Stack

- **React** (Hooks: `useState`)
- **Vite**
- **Material UI** (components and icons)
- **OpenWeatherMap API**
- **JavaScript (ES6+)**, async/await, Fetch API

## 📂 Project Structure

```
src/
├── components/
│   ├── Weather.jsx      # Root component, holds weather state
│   ├── SearchBox.jsx    # Search form and API call
│   └── InfoBox.jsx      # Weather card with image and icon
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/hlozaid/weather-app.git
   cd weather-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)

4. Create a `.env` file in the project root
   ```
   VITE_API_KEY=your_api_key_here
   ```

5. Start the development server
   ```bash
   npm run dev
   ```

## 🌐 Deployment

Deployed on GitHub Pages using `gh-pages`:

```bash
npm run deploy
```

## 💡 What I Learned

- Lifting state up and passing data between components using props
- Fetching and handling data from a REST API with async/await
- Handling API errors with try/catch
- Conditional rendering of images and icons
- Using environment variables in Vite
- Deploying a React app to GitHub Pages

## 👤 Author

**Mohd Zaid**
GitHub: [@hlozaid](https://github.com/hlozaid)
