import React from 'react';


export default function LoadingFidget({ X, Y, fidgetHeight }) {
  if (fidgetHeight <= 0 || fidgetHeight > 100) {
    throw new Error("Failed to create loading fidget (invalid height)");
  }

  if (X <= 0 || X > 100) {
    throw new Error("Failed to create loading fidget (invalid X coordinate)");
  }

  if (Y <= 0 || Y > 100) {
    throw new Error("Failed to create loading fidget (invalid X coordinate)");
  }

  return (
    <div className="loaderContainer">
      <div className="logoContainer">
        <svg className="logoSvg" viewBox="0 0 189.82 189.82" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>{`.cls-1{fill:#f27072;} .cls-2{fill: white;}`}</style>
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path class="cls-2" d="M 33.218 1.799 L 12.343 10.827 L 2.612 28.92 L 2.861 160.8 L 12.437 178.593 L 26.792 186.764 L 57.858 187.214 L 57.557 61.173 L 132.93 61.509 L 132.794 186.494 L 163.045 186.306 L 178.465 178.038 L 187.632 158.519 L 186.646 29.333 L 180.558 14.671 L 164.068 3.309 L 33.218 1.799 Z"></path>
              <path class="cls-1" d="M 154.34 0 L 35.48 0 C 15.891800064544242 0.016551743608535625 0.016541770634100172 15.89180005611976 0 35.48 L 0 154.34 C 0.016541770634104964 173.92819994388026 15.891800064544238 189.80344825639148 35.48 189.82 L 57.879999999999995 189.82 C 59.26071187457698 189.82 60.379999999999995 188.70071187457697 60.379999999999995 187.32 L 60.379999999999995 63.92 L 115.56 63.92 L 94.16 70.61 C 93.11864117129863 70.94084189578112 92.4109468371673 71.90735015964964 92.41 73 L 92.41 175.74 C 92.40890415473488 176.83105823987222 93.11823643956077 177.79575014601255 94.16 178.12 L 131.16 189.71 L 131.31 189.71 L 131.46 189.71 C 131.60983733033436 189.71987912144002 131.76016266966565 189.71987912144002 131.91 189.71 L 154.31 189.71 C 173.89819993545575 189.6934482563915 189.77345822936587 173.81819994388024 189.79 154.23000000000002 L 189.79 35.48 C 189.77348904790696 15.903489730181889 173.9164892968473 0.03307213716364227 154.34 0 Z M 184.82 154.34 C 184.8034626120779 171.1667837897626 171.16678378890475 184.80346173924966 154.34 184.82 L 134.44 184.82 L 134.44 61.42 C 134.44 60.03928812542302 133.32071187457697 58.92 131.94 58.92 L 57.88 58.92 C 56.49928812542302 58.92 55.38 60.03928812542302 55.38 61.42 L 55.38 184.82 L 35.48 184.82 C 18.65321621109524 184.80346173924966 5.0165373879220825 171.1667837897626 5 154.34 L 5 35.48 C 5.016537387922079 18.653216210237403 18.65321621109524 5.016538260750335 35.48 5 L 154.34 5 C 171.16678378890475 5.016538260750329 184.8034626120779 18.6532162102374 184.82 35.480000000000004 L 184.82 154.34 Z"></path>
            </g>
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
          height="66.5%"
          width="37.3%"
        />
        <rect
          className="car"
          fill="none"
          strokeWidth="0.5%"
          height="66.5%"
          width="37.3%"
          pathLength="100"
        />
      </svg>

      <style>
        {`
          .loaderContainer {
            position: absolute;
            height: ${fidgetHeight}%;
            aspect-ratio : 1 / 1;
            left: ${X}%;
            top: ${Y}%;
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
            --uib-color: black;
            --uib-speed: 3s;
            --uib-bg-opacity: 0;
            height: 100%;
            width: 100%;
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