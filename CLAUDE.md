# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A minimalist weather card web component built with Lit that displays current weather information for the user's location. The app uses browser geolocation, fetches weather data from Open-Meteo API, and displays the location name using reverse geocoding via LocationIQ API.

## Development Commands

This project uses **pnpm** as the package manager.

```bash
# Install dependencies
pnpm install

# Start development server (Vite dev server with HMR)
pnpm run dev

# Build for production (TypeScript compilation + Vite build)
pnpm run build

# Preview production build
pnpm run preview
```

## Environment Setup

Create a `.env` file in the root directory with:
```
VITE_RGEO_API_KEY="your_locationiq_api_key"
```

The LocationIQ API key is required for reverse geocoding (converting coordinates to city names). Get one at https://locationiq.com/

## Architecture

### Component Structure

The app consists of two Lit web components:

1. **`weather-card.ts`** - Main component that displays weather information
   - Uses `@customElement` decorator to register as `<weather-card>`
   - Accepts `lat` and `lon` properties from the parent
   - Automatically triggers `loadData()` when coordinates change (via `updated()` lifecycle)
   - Falls back to Valencia, Spain if no coordinates provided
   - Manages state: `weatherCode`, `temperature`, `apparentTemperature`, `city`

2. **`animated-background.ts`** - CSS-animated background with floating shapes
   - Registers as `<animated-background>`
   - Has separate styles for dark/light mode using `prefers-color-scheme`

### Service Layer

Located in `src/services/`:

- **`geolocation.ts`**
  - `getUserLocation()` - Promisified wrapper for browser's Geolocation API
  - `reverseGeocoding()` - Calls LocationIQ API to convert lat/lon to city name

- **`fetchWeather.ts`**
  - `fetchWeather()` - Calls Open-Meteo API for current weather data
  - Returns weather_code, temperature_2m, apparent_temperature

### Utilities

- **`src/utils/codeToText.ts`**
  - `codeToWeather()` - Maps Open-Meteo weather codes to Spanish descriptions
  - `codeToIcon()` - Maps weather codes to Ionicons icon names (sunny, cloudy, rainy, snow, thunderstorm)

### Application Flow

1. `main.ts` initializes the app by calling `getUserLocation()`
2. If geolocation succeeds, coordinates are set on the `<weather-card>` element
3. When `lat`/`lon` properties change, `weather-card` automatically calls `loadData()`
4. `loadData()` fetches the city name via reverse geocoding and weather data
5. Component re-renders with the updated weather information

## Important Technical Details

### TypeScript Configuration

- **Experimental decorators enabled** - Required for Lit's `@customElement`, `@property`, `@state` decorators
- **`useDefineForClassFields: false`** - Required for Lit decorators to work properly
- **Path alias**: `@/` maps to `src/` directory (configured in both `tsconfig.json` and `vite.config.ts`)

### External Dependencies

- **Lit** - Web component library with reactive properties and templating
- **Ionicons** - Icon library loaded via CDN in `index.html`
- Weather codes follow the WMO Weather interpretation codes standard used by Open-Meteo

### Styling

- Components use Lit's `css` tagged template for scoped styles
- Glassmorphism effect on the weather card
- Responsive design with dark/light mode support via `@media (prefers-color-scheme: light)`
- All text is in Spanish

## External APIs

- **Open-Meteo** (no API key required): https://api.open-meteo.com/v1/forecast
  - Free weather API, no authentication needed
  - Returns current weather conditions and 3-day forecast

- **LocationIQ** (API key required): https://us1.locationiq.com/v1/reverse
  - Reverse geocoding to convert coordinates to city names
  - API key stored in `.env` as `VITE_RGEO_API_KEY`

## Common Modifications

When adding new weather data fields, you'll need to:
1. Update the API call in `src/services/fetchWeather.ts` with the new parameter
2. Add the corresponding state property in `weather-card.ts`
3. Update the render template to display the new data
