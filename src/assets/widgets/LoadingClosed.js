import React from 'react';
import HoldingScreenInfoTabs from '../../app/HoldingScreenInfoTabs';

// TODO: instead of event listener, use hook for promise isLoading on github data fetches
// TODO: fetch github commit history
export default function LoadingClosedFidget() {
  const X_0 = 20;
  const Y_0 = 21;
  const fidgetWidth_0 = 30;

  const X_1 = 2;
  const Y_1 = 6;
  const fidgetWidth_1 = 15;

  let X = X_0;
  let Y = Y_0;
  let fidgetWidth = fidgetWidth_0;
  let carOpacity = 1;

  const toggleExpansion = () => {
    const cars = document.getElementsByClassName('car');
    const displayContainers = document.getElementsByClassName('displayContainer');
    const infoDisplays = document.getElementsByClassName('infoDisplay');

    if (cars.length) {
      const displayContainer = displayContainers[0];
      if (cars[0].style.opacity === '0') {
        displayContainer.classList.remove("shrinking");
        cars[0].style.opacity = '1';
      } else {         
        displayContainer.classList.add("shrinking");
        cars[0].style.opacity = '0';
      }
    }

    if (infoDisplays.length) {
      const infoDisplay = infoDisplays[0];
      infoDisplay.classList.add('risingText');
    }
  }
  window.addEventListener('click', toggleExpansion, {once: true});

  return (
    <div className="lockscreenContainer">
      <div className="infoDisplay">
        <HoldingScreenInfoTabs />
      </div>
      <div className="displayContainer">
        <div className="boardroomTextContainer">
          <svg className="boardroomText" viewBox="0 0 403 62" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>{`.cls-1{fill:#f27072;}.cls-2{fill:#fff;}`}</style>
            </defs>
            <g id="Layer_2" data-name="Layer 2" transform="matrix(1, 0, 0, 1, -232.39024353027344, -58.624000549316406)">
              <g id="Layer_1-2" data-name="Layer 1">
                <path className="cls-2" d="M232.73,119.59V62.72h18.59q9.27,0,13.93,3.82t4.67,11.33a11.54,11.54,0,0,1-2.27,7,14.67,14.67,0,0,1-6.17,4.75,13.17,13.17,0,0,1,7.28,4.9,14,14,0,0,1,2.68,8.62q0,7.65-5,12t-14,4.37ZM240.23,87h11.33a11.9,11.9,0,0,0,7.87-2.46,8.3,8.3,0,0,0,2.95-6.7c0-3.13-.91-5.4-2.74-6.83s-4.59-2.13-8.32-2.13H240.23Zm0,6v20.47h12.38c3.49,0,6.25-.91,8.26-2.72a9.53,9.53,0,0,0,3-7.48Q263.9,93,252.73,93Z"></path>
                <path className="cls-2" d="M278.69,98.07a24.9,24.9,0,0,1,2.44-11.17,18.21,18.21,0,0,1,6.8-7.66,18.45,18.45,0,0,1,9.94-2.7,17.83,17.83,0,0,1,14,6q5.34,6,5.33,15.9v.51A25.12,25.12,0,0,1,314.8,110a18,18,0,0,1-6.76,7.64A18.72,18.72,0,0,1,298,120.37a17.79,17.79,0,0,1-13.93-6q-5.32-6-5.33-15.82Zm7.26.86q0,7,3.27,11.29a11.06,11.06,0,0,0,17.48-.06q3.24-4.32,3.24-12.09,0-7-3.3-11.27a10.5,10.5,0,0,0-8.77-4.32,10.39,10.39,0,0,0-8.64,4.26Q286,91,286,98.93Z"></path>
                <path className="cls-2" d="M351.52,119.59a14.77,14.77,0,0,1-1-4.45,16.14,16.14,0,0,1-12,5.23,14.9,14.9,0,0,1-10.25-3.53,11.45,11.45,0,0,1-4-9,11.93,11.93,0,0,1,5-10.25q5-3.66,14.12-3.65h7V90.65a8.13,8.13,0,0,0-2.27-6c-1.51-1.5-3.74-2.24-6.68-2.24A10.52,10.52,0,0,0,335,84.32,5.74,5.74,0,0,0,332.34,89h-7.26a10,10,0,0,1,2.24-6.11,15.43,15.43,0,0,1,6.1-4.67,20.55,20.55,0,0,1,8.45-1.72q7.31,0,11.45,3.66t4.29,10.06v19.45A23.77,23.77,0,0,0,359.1,119v.62Zm-12-5.51a12.7,12.7,0,0,0,6.44-1.75,10.66,10.66,0,0,0,4.42-4.57V99.08h-5.67q-13.28,0-13.28,7.78a6.59,6.59,0,0,0,2.27,5.31A8.68,8.68,0,0,0,339.53,114.08Z"></path>
                <path className="cls-2" d="M388.57,83.81a21.89,21.89,0,0,0-3.55-.27q-7.11,0-9.65,6v30h-7.23V77.33h7l.12,4.88a11.25,11.25,0,0,1,10.08-5.67,7.45,7.45,0,0,1,3.2.55Z"></path>
                <path className="cls-2" d="M391.91,98.11q0-9.73,4.61-15.65a14.59,14.59,0,0,1,12.07-5.92q7.43,0,11.76,5.08v-22h7.23v60h-6.64l-.36-4.53q-4.33,5.31-12.07,5.31a14.44,14.44,0,0,1-12-6q-4.62-6-4.63-15.71Zm7.23.82q0,7.18,3,11.25a9.59,9.59,0,0,0,8.2,4.06,10.55,10.55,0,0,0,10-6.17V88.65a10.62,10.62,0,0,0-10-6,9.63,9.63,0,0,0-8.28,4.1Q399.14,90.88,399.14,98.93Z"></path>
                <path className="cls-1" d="M460,96.58H446.62v23h-7.54V62.72h18.83q9.61,0,14.78,4.37t5.18,12.74A15.32,15.32,0,0,1,475,89.08a17.12,17.12,0,0,1-8,5.9l13.36,24.14v.47h-8.05Zm-13.36-6.13h11.52q5.6,0,8.89-2.89a9.82,9.82,0,0,0,3.3-7.75c0-3.52-1.05-6.23-3.14-8.1s-5.13-2.83-9.09-2.86H446.62Z"></path>
                <path className="cls-1" d="M484.53,98.07A24.9,24.9,0,0,1,487,86.9a18.27,18.27,0,0,1,6.8-7.66,18.47,18.47,0,0,1,9.94-2.7,17.85,17.85,0,0,1,14,6q5.33,6,5.33,15.9v.51A25.12,25.12,0,0,1,520.64,110a17.87,17.87,0,0,1-6.75,7.64,18.75,18.75,0,0,1-10.1,2.73,17.8,17.8,0,0,1-13.93-6q-5.33-6-5.33-15.82Zm7.27.86q0,7,3.26,11.29a11.06,11.06,0,0,0,17.48-.06q3.24-4.32,3.24-12.09,0-7-3.3-11.27a10.49,10.49,0,0,0-8.77-4.32,10.37,10.37,0,0,0-8.63,4.26Q491.79,91,491.8,98.93Z"></path>
                <path className="cls-1" d="M529.36,98.07A24.9,24.9,0,0,1,531.8,86.9a18.18,18.18,0,0,1,6.79-7.66,18.51,18.51,0,0,1,9.95-2.7,17.83,17.83,0,0,1,14,6q5.34,6,5.33,15.9v.51A25.12,25.12,0,0,1,565.47,110a18,18,0,0,1-6.76,7.64,18.73,18.73,0,0,1-10.1,2.73,17.77,17.77,0,0,1-13.92-6q-5.34-6-5.33-15.82Zm7.26.86q0,7,3.26,11.29a11.06,11.06,0,0,0,17.48-.06q3.25-4.32,3.25-12.09,0-7-3.3-11.27a10.51,10.51,0,0,0-8.77-4.32,10.39,10.39,0,0,0-8.64,4.26Q536.63,91,536.62,98.93Z"></path>
                <path className="cls-1" d="M582.89,77.33l.2,4.68q4.65-5.46,12.54-5.47,8.86,0,12.07,6.8a16,16,0,0,1,5.48-4.92,16.25,16.25,0,0,1,8-1.88q13.91,0,14.14,14.73v28.32h-7.22V91.7q0-4.53-2.07-6.78t-7-2.24a9.59,9.59,0,0,0-6.68,2.4,9.72,9.72,0,0,0-3.08,6.46v28.05H602V91.9q0-9.23-9-9.22-7.11,0-9.73,6v30.86h-7.22V77.33Z"></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="loaderContainer">
          <div className="logoContainer">
            <svg className="logoSvg" viewBox="0 0 189.82 189.82" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <style>
                  {`
                    .cls-1{fill:#f27072;} 
                    .cls-2{fill: rgb(255, 255, 255);} 
                    .cls-3{stroke: rgb(0, 0, 0); stroke-opacity: 0; paint-order: stroke; fill: rgba(216, 216, 216, 0.55);}
                  `}
                </style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path className="cls-2"
                        d="M 33.218 1.799 L 12.343 10.827 L 2.612 28.92 L 2.861 160.8 L 12.437 178.593 L 26.792 186.764 L 57.858 187.214 L 57.557 61.173 L 132.93 61.509 L 132.794 186.494 L 163.045 186.306 L 178.465 178.038 L 187.632 158.519 L 186.646 29.333 L 180.558 14.671 L 164.068 3.309 L 33.218 1.799 Z"></path>
                  <path className="cls-1"
                        d="M 154.34 0 L 35.48 0 C 15.892 0.017 0.017 15.892 0 35.48 L 0 154.34 C 0.017 173.928 15.892 189.803 35.48 189.82 L 57.88 189.82 C 59.261 189.82 131.16 189.71 131.16 189.71 L 131.31 189.71 L 154.31 189.71 C 173.898 189.693 189.773 173.818 189.79 154.23 L 189.79 35.48 C 189.773 15.903 173.916 0.033 154.34 0 Z M 184.82 154.34 C 184.803 171.167 171.167 184.803 154.34 184.82 L 134.44 184.82 L 134.44 61.42 C 134.44 60.039 133.321 58.92 131.94 58.92 L 57.88 58.92 C 56.499 58.92 55.38 60.039 55.38 61.42 L 55.38 184.82 L 35.48 184.82 C 18.653 184.803 5.017 171.167 5 154.34 L 5 35.48 C 5.017 18.653 18.653 5.017 35.48 5 L 154.34 5 C 171.167 5.017 184.803 18.653 184.82 35.48 L 184.82 154.34 Z"></path>
                </g>
                <rect className="cls-3" x="65.011" y="110.123" width="2.816" height="25.449"></rect>
              </g>
            </svg>
          </div>
          <svg
            className="container"
          >
            <rect
              className="track"
              fill="none"
              strokeWidth="0.5%"
              height="100%"
              width="100%"
            />
            <rect
              className="car"
              fill="none"
              strokeWidth="0.5%"
              height="100%"
              width="100%"
              pathLength="80"
            />
          </svg>
        </div>
      </div>
      <style>
        {`
          .lockscreenContainer {
            height: 100%;
            width: 100%;
            position: absolute;
            background-color: rgb(191, 191, 191, 0.9);
          }

          .infoDisplay {
            position: absolute;
            left: ${X_0}%;
            top: ${Y_1}%;
            opacity: 0.0;
            width: 50%;
            z-index: 10;
          }
          
          .boardroomTextContainer {
            width: 100%;
          }
          
          .boardroomText {
            width: 100%;
            position: inline-block;
            padding-bottom: 3px;
          }
          
          .displayContainer {
            position: absolute;
            float: center;
            width: ${fidgetWidth}%;
            position: absolute;
            top: ${Y}%;
            left: ${X}%;
          }
          
          .loaderContainer {
            position: relative;
            width: 100%;
            aspect-ratio : 1 / 1;
          }
          
          .logoSvg {
            height: 100%;
          }
          
          .logoContainer {
            position: absolute;
            height: 100%;
            width: 100%;
          }
          
          .container {
            --uib-size: 35px;
            --uib-color: white;
            --uib-speed: 3s;
            --uib-bg-opacity: 0.4;
            height: 66.8%;
            width: 37.3%;
            transform-origin: center;
            will-change: transform;
            overflow: visible;
            position: absolute;
            left: 31.4%;
            top: 33.3%;
          }

          .car {
            fill: none;
            stroke: var(--uib-color);
            stroke-dasharray: 25, 75;
            stroke-dashoffset: 0;
            opacity: ${carOpacity};
            animation: travel var(--uib-speed) linear infinite;
            will-change: stroke-dasharray, stroke-dashoffset;
            transition: stroke 0.5s ease;
          }

          .track {
            fill: none;
            stroke: var(--uib-color);
            opacity: var(--uib-bg-opacity);
            transition: stroke 0.5s ease;
          }

          @keyframes travel {
            0% {
              stroke-dashoffset: 0;
            }

            100% {
              stroke-dashoffset: -100;
            }
          }
          
          .shrinking {
            animation: recede 0.5s;
          }

          .risingText {
            animation: rise 0.5s;
            animation-delay: 0.5s;
          }

          .sinkingText {
            animation: vanish 0.5s;
          }

          .shrinking, .risingText, .sinkingText {
            -webkit-animation-fill-mode: forwards;
            -moz-animation-fill-mode: forwards;   
            -o-animation-fill-mode: forwards;
            -ms-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
          }

          @keyframes vanish {
            0% {
              opacity: 1;
            }

            100% {
              opacity: 0;
            }
          }

          @keyframes rise {
            0% {
              opacity: 0;
            }

            100% {
              opacity: 1;
            }
          }
          
          @keyframes recede {
            0% {
              left: ${X_0}%;
              top: ${Y_0}%;
              width: ${fidgetWidth_0}%;
            }
            
            100% {
              left: ${X_1}%;
              top: ${Y_1}%;
              width: ${fidgetWidth_1}%;
            }
          }

          .logo-stencil {
            width: 100px;
            height: 100px;
            margin-bottom: 20px;
          }
        `}
      </style>
    </div>
  );
}