import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('animated-background')
export class AnimatedBackground extends LitElement {
  protected render(): unknown {
      return html`
        <div class="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      `;
  }

  static styles = css`
    @keyframes move {
        100% {
            transform: translate3d(0, 0, 1px) rotate(360deg);
        }
    }

    .background {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: #030712;
        overflow: hidden;
    }

    .background span {
        width: 29vmin;
        height: 29vmin;
        border-radius: 29vmin;
        backface-visibility: hidden;
        position: absolute;
        animation: move;
        animation-duration: 41;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }


    .background span:nth-child(0) {
        color: #434242;
        top: 89%;
        left: 2%;
        animation-duration: 71s;
        animation-delay: -20s;
        transform-origin: 6vw 22vh;
        box-shadow: -58vmin 0 8.205116094553082vmin currentColor;
    }
    .background span:nth-child(1) {
        color: #392858;
        top: 64%;
        left: 12%;
        animation-duration: 64s;
        animation-delay: -42s;
        transform-origin: 23vw 22vh;
        box-shadow: 58vmin 0 8.212261910310367vmin currentColor;
    }
    .background span:nth-child(2) {
        color: #392858;
        top: 48%;
        left: 95%;
        animation-duration: 6s;
        animation-delay: -50s;
        transform-origin: 20vw 21vh;
        box-shadow: 58vmin 0 7.786316814300691vmin currentColor;
    }
    .background span:nth-child(3) {
        color: #434242;
        top: 7%;
        left: 63%;
        animation-duration: 37s;
        animation-delay: -44s;
        transform-origin: -2vw 20vh;
        box-shadow: -58vmin 0 7.930565267228909vmin currentColor;
    }
    .background span:nth-child(4) {
        color: #434242;
        top: 1%;
        left: 6%;
        animation-duration: 53s;
        animation-delay: -75s;
        transform-origin: 22vw -1vh;
        box-shadow: -58vmin 0 7.4035446331391vmin currentColor;
    }
    .background span:nth-child(5) {
        color: #434242;
        top: 86%;
        left: 5%;
        animation-duration: 40s;
        animation-delay: -47s;
        transform-origin: -20vw -19vh;
        box-shadow: -58vmin 0 7.467433720017471vmin currentColor;
    }
    .background span:nth-child(6) {
        color: #392858;
        top: 81%;
        left: 10%;
        animation-duration: 22s;
        animation-delay: -11s;
        transform-origin: 13vw 25vh;
        box-shadow: -58vmin 0 8.200273716473568vmin currentColor;
    }
    .background span:nth-child(7) {
        color: #434242;
        top: 4%;
        left: 24%;
        animation-duration: 37s;
        animation-delay: -48s;
        transform-origin: -5vw -3vh;
        box-shadow: 58vmin 0 7.620435038379643vmin currentColor;
    }
    .background span:nth-child(8) {
        color: #392858;
        top: 68%;
        left: 40%;
        animation-duration: 27s;
        animation-delay: -43s;
        transform-origin: 2vw 16vh;
        box-shadow: 58vmin 0 7.9386191335300005vmin currentColor;
    }
    .background span:nth-child(9) {
        color: #434242;
        top: 85%;
        left: 62%;
        animation-duration: 55s;
        animation-delay: -26s;
        transform-origin: 23vw 1vh;
        box-shadow: -58vmin 0 8.208576026257699vmin currentColor;
    }
    .background span:nth-child(10) {
        color: #434242;
        top: 27%;
        left: 38%;
        animation-duration: 27s;
        animation-delay: -50s;
        transform-origin: -21vw -15vh;
        box-shadow: 58vmin 0 7.837659085579562vmin currentColor;
    }
    .background span:nth-child(11) {
        color: #153847;
        top: 36%;
        left: 25%;
        animation-duration: 9s;
        animation-delay: -36s;
        transform-origin: -4vw 21vh;
        box-shadow: -58vmin 0 8.034482511701441vmin currentColor;
    }
    .background span:nth-child(12) {
        color: #153847;
        top: 68%;
        left: 85%;
        animation-duration: 92s;
        animation-delay: -77s;
        transform-origin: 23vw 15vh;
        box-shadow: 58vmin 0 7.336861033796722vmin currentColor;
    }
    .background span:nth-child(13) {
        color: #153847;
        top: 55%;
        left: 54%;
        animation-duration: 46s;
        animation-delay: -16s;
        transform-origin: 9vw 23vh;
        box-shadow: -58vmin 0 7.7935062459926945vmin currentColor;
    }
    .background span:nth-child(14) {
        color: #434242;
        top: 80%;
        left: 30%;
        animation-duration: 56s;
        animation-delay: -10s;
        transform-origin: 7vw -6vh;
        box-shadow: 58vmin 0 8.040403987045412vmin currentColor;
    }

    @media (prefers-color-scheme: light){
      @keyframes move {
          100% {
              transform: translate3d(0, 0, 1px) rotate(360deg);
          }
      }

      .background {
          position: fixed;
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          background: #f2f2f2;
          overflow: hidden;
      }

      .background span {
          width: 29vmin;
          height: 29vmin;
          border-radius: 29vmin;
          backface-visibility: hidden;
          position: absolute;
          animation: move;
          animation-duration: 41;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
      }


      .background span:nth-child(0) {
          color: #f5d184;
          top: 58%;
          left: 60%;
          animation-duration: 44s;
          animation-delay: -10s;
          transform-origin: 14vw 23vh;
          box-shadow: 58vmin 0 7.310807136121923vmin currentColor;
      }
      .background span:nth-child(1) {
          color: #9264e8;
          top: 87%;
          left: 97%;
          animation-duration: 78s;
          animation-delay: -14s;
          transform-origin: -2vw 24vh;
          box-shadow: -58vmin 0 7.6536369231969275vmin currentColor;
      }
      .background span:nth-child(2) {
          color: #9264e8;
          top: 1%;
          left: 67%;
          animation-duration: 8s;
          animation-delay: -24s;
          transform-origin: -13vw 11vh;
          box-shadow: 58vmin 0 7.739310495619833vmin currentColor;
      }
      .background span:nth-child(3) {
          color: #f5d184;
          top: 48%;
          left: 28%;
          animation-duration: 14s;
          animation-delay: -21s;
          transform-origin: -14vw -22vh;
          box-shadow: 58vmin 0 7.373416558095028vmin currentColor;
      }
      .background span:nth-child(4) {
          color: #f5d184;
          top: 15%;
          left: 74%;
          animation-duration: 67s;
          animation-delay: -45s;
          transform-origin: 16vw 25vh;
          box-shadow: 58vmin 0 7.521857912540756vmin currentColor;
      }
      .background span:nth-child(5) {
          color: #f5d184;
          top: 40%;
          left: 74%;
          animation-duration: 93s;
          animation-delay: -9s;
          transform-origin: 7vw -21vh;
          box-shadow: -58vmin 0 7.472154323042138vmin currentColor;
      }
      .background span:nth-child(6) {
          color: #9264e8;
          top: 95%;
          left: 83%;
          animation-duration: 42s;
          animation-delay: -6s;
          transform-origin: 13vw -2vh;
          box-shadow: 58vmin 0 7.6905622154959445vmin currentColor;
      }
      .background span:nth-child(7) {
          color: #9264e8;
          top: 30%;
          left: 10%;
          animation-duration: 26s;
          animation-delay: -66s;
          transform-origin: -12vw -24vh;
          box-shadow: 58vmin 0 7.305016422164971vmin currentColor;
      }
      .background span:nth-child(8) {
          color: #3fabd9;
          top: 100%;
          left: 43%;
          animation-duration: 51s;
          animation-delay: -54s;
          transform-origin: -8vw -11vh;
          box-shadow: -58vmin 0 7.629991108879164vmin currentColor;
      }
      .background span:nth-child(9) {
          color: #9264e8;
          top: 24%;
          left: 16%;
          animation-duration: 33s;
          animation-delay: -61s;
          transform-origin: 19vw 17vh;
          box-shadow: -58vmin 0 7.8124600072061545vmin currentColor;
      }
      .background span:nth-child(10) {
          color: #f5d184;
          top: 9%;
          left: 62%;
          animation-duration: 48s;
          animation-delay: -21s;
          transform-origin: 14vw -1vh;
          box-shadow: 58vmin 0 7.685403683798978vmin currentColor;
      }
      .background span:nth-child(11) {
          color: #9264e8;
          top: 26%;
          left: 70%;
          animation-duration: 52s;
          animation-delay: -33s;
          transform-origin: -6vw 22vh;
          box-shadow: -58vmin 0 7.797184257956414vmin currentColor;
      }
      .background span:nth-child(12) {
          color: #3fabd9;
          top: 56%;
          left: 9%;
          animation-duration: 8s;
          animation-delay: -71s;
          transform-origin: -15vw -14vh;
          box-shadow: -58vmin 0 8.066322421141557vmin currentColor;
      }
      .background span:nth-child(13) {
          color: #9264e8;
          top: 78%;
          left: 59%;
          animation-duration: 93s;
          animation-delay: -3s;
          transform-origin: -20vw -17vh;
          box-shadow: 58vmin 0 8.177940467080074vmin currentColor;
      }
      .background span:nth-child(14) {
          color: #3fabd9;
          top: 50%;
          left: 34%;
          animation-duration: 29s;
          animation-delay: -9s;
          transform-origin: -8vw 17vh;
          box-shadow: -58vmin 0 7.8841769855633235vmin currentColor;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'animated-background': AnimatedBackground
  }
}