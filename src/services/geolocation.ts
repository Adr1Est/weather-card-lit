const RGEO_API_KEY = import.meta.env.VITE_RGEO_API_KEY;

export function getUserLocation(): Promise<{ lat: number, lon: number }>{
  return new Promise((resolve, reject) => {
    if(!navigator.geolocation){
      reject(new Error('Geolocalización no soportada por el navegador'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  });
}

export const reverseGeocoding = async ({ lat, lon }: { lat: number, lon: number }) => {
  const response = await fetch(`https://us1.locationiq.com/v1/reverse?key=${RGEO_API_KEY}&lat=${lat}&lon=${lon}&format=json`);
  const data = await response.json();
  return data;
}