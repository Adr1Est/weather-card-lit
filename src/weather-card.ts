import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { codeToIcon, codeToWeather } from '@/utils/codeToText';

@customElement('weather-card')
export class WeatherCard extends LitElement {

  @property({ type: String })
  public city: string = '';
  @state()
  protected weatherCode: number = 2342;
  @state()
  protected temperature: number = 0;
  @state()
  protected apparentTemperature: number = 0;

  private cityCoord: Record<string, { lat: number; lon: number }> = {
    Madrid: { lat: 40.4168, lon: -3.7038 },
    Barcelona: { lat: 41.3851, lon: 2.1734 },
    Valencia: { lat: 39.4699, lon: -0.3763 },
  };

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
        border: 1px solid #242424;
      }
      button {
        background-color: #f9f9f9;
      }
      .bar{
        border: 1px solid #242424;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'weather-card': WeatherCard
  }
}
