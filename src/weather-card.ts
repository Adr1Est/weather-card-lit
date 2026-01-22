import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('weather-card')
export class WeatherCard extends LitElement {

  @property({ type: String })
  public city: string = '';

  render() {
    return html`
      <h1>${this.city}</h1>
    `
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'weather-card': WeatherCard
  }
}
