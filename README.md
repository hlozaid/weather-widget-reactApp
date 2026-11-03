# Weather Widget

A simple weather app built with React, Vite and Material UI. Search any city to see its current weather. The card image and icon change based on the weather (hot, cold or rainy).

**Live demo:** https://hlozaid.github.io/weather-widget-reactApp/

## Features

- Search weather by city name
- Shows temperature, min/max temperature, humidity, "feels like" and a weather description
- Background image and Material UI icon change for hot, cold and rainy conditions
- Error message when a city is not found

## Tech Stack

- React
- Vite
- Material UI (`@mui/material`, `@mui/icons-material`)
- OpenWeatherMap API
- GitHub Pages (deployed with `gh-pages`)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/hlozaid/weather-widget-reactApp.git
cd weather-widget-reactApp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API key

Get a free API key from [OpenWeatherMap](https://openweathermap.org/api), then create a `.env` file in the project root:

```
VITE_API_KEY=your_api_key_here
```

### 4. Run the app

```bash
npm run dev
```

Open the local URL shown in the terminal (usually http://localhost:5173).

## Deployment

The app is deployed on GitHub Pages using the `gh-pages` package.

```bash
npm run deploy
```

Make sure `base` in `vite.config.js` matches the repository name:

```js
base: '/weather-widget-reactApp/',
```

## Project Structure

```
src/
├── Weather.jsx     # Main component, holds weather state
├── SearchBox.jsx   # Search input and API call
├── InfoBox.jsx     # Weather card (image, icon, details)
└── ...
```

## Author

**Mohd Zaid** - [@hlozaid](https://github.com/hlozaid)
