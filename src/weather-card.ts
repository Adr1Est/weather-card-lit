import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { codeToIcon, codeToWeather } from '@/utils/codeToText';
import { fetchWeather } from '@/services/fetchWeather';

@customElement('weather-card')
export class WeatherCard extends LitElement {

  @property({ type: String })
  public city: string = '';
  @state()
  protected weatherCode: number = 0;
  @state()
  protected temperature: number = 0;
  @state()
  protected apparentTemperature: number = 0;

  private cityCoord: Record<string, { lat: number; lon: number }> = {
    madrid: { lat: 40.4168, lon: -3.7038 },
    barcelona: { lat: 41.3851, lon: 2.1734 },
    valencia: { lat: 39.4699, lon: -0.3763 },
  };

  async loadData(){
    const coords = this.cityCoord[this.city.toLowerCase()];
    if(!coords) {
      this.weatherCode = 999;
      this.temperature = 999;
      this.apparentTemperature = 999;
      return;
    }

    const data = await fetchWeather(coords);
    this.weatherCode = data.weather_code;
    this.temperature = data.temperature_2m;
    this.apparentTemperature = data.apparent_temperature;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.loadData(); 
  }

  render() {
    return html`
      <h1>${this.city}</h1>
      
      <div class="mainInfo">

        <ion-icon name=${codeToIcon(this.weatherCode)}></ion-icon>

        <p class="degrees">${this.temperature}ºC</p>
        <p class="info1">${codeToWeather(this.weatherCode)}</p>
        <p class="info2">Sensación de ${this.apparentTemperature}ºC</p>
      </div>

      <hr class="bar"/>

      <div class="nextDaysContainer">
        <p>WIP</p>
      </div>
    `
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #f2f2f2;
      border-radius: 20px;
      padding: 10px;
      width: 20%;
      min-width: 230px;
      gap: 10px;
    }

    h1, p{
      margin: 0;
    }
    p{
      font-weight: 500;
    }

    ion-icon{
      font-size: 5rem;
    }

    .mainInfo{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
    }
    .degrees{
     align-self: flex-end;
     font-size: 1.5rem;
    }
    .info1{
      font-size: 1.2rem;
    }
    .info2{
      margin-top: 10px;
    }

    .bar{
      width: 90%;
      border-radius: 20px;
      border: 1px solid #f2f2f2;
    }

    @media (prefers-color-scheme: light) {
      :host{
        border: 1px solid #030712;
      }
      .bar{
        border: 1px solid #030712;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'weather-card': WeatherCard
  }
}
