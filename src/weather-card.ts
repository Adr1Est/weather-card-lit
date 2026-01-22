import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { codeToIcon, codeToWeather } from '@/utils/codeToText';
import { fetchWeather } from '@/services/fetchWeather';

@customElement('weather-card')
export class WeatherCard extends LitElement {

  @property({ type: Number })
  public lat!: number;
  @property({ type: Number })
  public lon!: number;
  @property({ type: String})
  public city: string = 'Madrid';

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
    let coords;

    if(this.lat !== null && this.lon !== null){
      coords = { lat: this.lat, lon: this.lon };
      this.city = '¿?';
    }else{
      coords = this.cityCoord["madrid"];
    }

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

  protected updated(changedProps: Map<string, unknown>){
    if( changedProps.has('lat') || changedProps.has('lon')){
      if(this.lat !== null && this.lon !== null){
        this.loadData();
      }
    }
  }

  render() {
    return html`
      <h1>${this.city}</h1>
      
      <div class="mainInfo">

        <ion-icon name=${codeToIcon(this.weatherCode)}></ion-icon>
        <div class="weatherInfo">
          <p class="degrees">${this.temperature}ºC</p>
          <p class="info1">${codeToWeather(this.weatherCode)}</p>
          <p class="info2">Sensación de ${this.apparentTemperature}ºC</p>
        </div>
      </div>

      <!--<hr class="bar"/>

      <div class="nextDaysContainer">
        <p>WIP</p>
      </div>-->
    `
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      width: 20%;
      min-width: 230px;
      max-width: 300px;
      gap: 10px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
      backdrop-filter: blur(3.3px);
      -webkit-backdrop-filter: blur(3.3px);
      border: 1px solid rgba(255, 255, 255, 0.03);
      z-index: 1;
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
     width: 100%;
     text-align: right;
     font-weight: 700;
     font-size: 1.5rem;
    }
    .info1{
      width: 100%;
      text-align: center;
      font-size: 1.2rem;
    }
    .info2{
      margin-top: 10px;
      width: 100%;
      text-align: center;
      color: #38BDF8;
    }

    .bar{
      width: 90%;
      border-radius: 20px;
      border: 1px solid #f2f2f2;
    }

    @media (prefers-color-scheme: light) {
      :host{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .bar{
        border: 1px solid #030712;
      }
      .info2{
        color: #f87e38;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'weather-card': WeatherCard
  }
}
