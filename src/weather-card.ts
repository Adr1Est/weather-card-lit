import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('weather-card')
export class WeatherCard extends LitElement {

  @property({ type: String })
  public city: string = '';

  render() {
    return html`
      <h1>${this.city}</h1>
      
      <div class="mainInfo">
        <ion-icon name="sunny"></ion-icon>
        <p class="degrees">15ºC</p>
        <p class="info1">Soleado</p>
        <p class="info2">Sensación de 13ºC</p>
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
      width: 250px;
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
