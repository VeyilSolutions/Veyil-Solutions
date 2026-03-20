import styled, { keyframes } from "styled-components";

function Loader({ visible }) {
  return (
    <Overlay className={visible ? "show" : "hide"}>
      <div className="logo">
        
        {/* Rays */}
        <div className="rays">
          {[...Array(16)].map((_, i) => (
            <span key={i} style={{ "--i": i }} />
          ))}
        </div>

        {/* Sun */}
        <div className="sun" />

        {/* Blue Plate */}
        <div className="wave wave-back" />
        <div className="wave wave-mid" />
        <div className="wave wave-front" />
      </div>
    </Overlay>
  );
}

/* Animations */

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const rayGrow = keyframes`
  0% {
    transform: rotate(calc(var(--i) * 11.25deg)) translateY(-60px) scaleY(0);
    opacity: 0;
  }
  100% {
    transform: rotate(calc(var(--i) * 11.25deg)) translateY(-60px) scaleY(1);
    opacity: 1;
  }
`;

const sunPulse = keyframes`
  0%,100% { transform: translateX(-50%) scale(1); }
  50% { transform: translateX(-50%) scale(1.05); }
`;

const waveFlow = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-20px); }
  100% { transform: translateX(0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  pointer-events: none;
  opacity: 0;

  &.show {
    animation: ${fadeIn} 0.3s ease forwards;
  }

  &.hide {
    animation: ${fadeOut} 0.4s ease forwards;
  }

 .logo {
  position: relative;
  width: 140px;   /* smaller */
  height: 140px;  /* smaller */
}

  /* Rays */

  .rays {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .rays span {
    position: absolute;
    width: 4px;
    height: 38px;
    top: 28px;
    left: 50%;
    background: linear-gradient(to bottom, #ffd54f, #ff8f00);
    transform-origin: bottom center;
    border-radius: 4px;
    opacity: 0;
    animation: ${rayGrow} 0.6s ease forwards;
    animation-delay: calc(var(--i) * 0.05s);
  }

  /* Sun */

  .sun {
    position: absolute;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle at 30% 30%, #ffcc33, #ff6f00);
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 60px;
    animation: ${sunPulse} 2.5s ease-in-out infinite;
    box-shadow:
      0 0 30px rgba(255, 140, 0, 0.6),
      0 0 60px rgba(255, 140, 0, 0.3);
    z-index: 2;
  }

  /* Waves */

  .wave {
    position: absolute;
    width: 200px;
    height: 70px;
    left: -30px;
    border-radius: 50%;
    animation: ${waveFlow} 4s ease-in-out infinite;
  }

  .wave-back {
    bottom: 2px;
    background: #2196f3;
    opacity: 0.8;
  }

  .wave-mid {
    bottom: -6px;
    background: #1e88e5;
    opacity: 0.9;
    animation-delay: 1s;
  }

  .wave-front {
    bottom: -14px;
    background: #1565c0;
    animation-delay: 2s;
  }
`;

export default Loader;