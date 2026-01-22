const fetchWeather = async ({ lat, lon }: { lat: number, lon: number }) => {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,precipitation,weather_code,cloud_cover&timezone=Europe%2FBerlin&forecast_days=3`);
    const data = await response.json();
    return data.current;
  } catch (error) {
    console.error(error);
    return {
      weather_code: 999,
      temperature_2m: 999,
      apparent_temperature: 999,
    }
  }
}

export {
  fetchWeather,
}