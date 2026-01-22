import { getUserLocation } from "@/services/geolocation";
import '@/weather-card';
import '@/animated-background';

const card = document.querySelector("weather-card") as any;

getUserLocation()
  .then(({ lat, lon }) => {
    if(card){
      card.lat = lat;
      card.lon = lon;
    }
  })
  .catch((error) => {
    console.warn("No se puedo obtener la ubicación, se usará la ciudad por defecto:", error);
    if(card){
      card.loadData();
    }
  });