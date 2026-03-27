import styled, { keyframes } from "styled-components";

export default function Loader({ visible }) {
  return (
    <Overlay className={visible ? "show" : "hide"}>
      <div className="loader">

        {/* Sun */}
        <div className="sun" />

        {/* Brand */}
        <h2>Veyil Solutions</h2>

        {/* Loading line */}
        <div className="bar">
          <span />
        </div>

      </div>
    </Overlay>
  );
}

/* Animations */

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const fadeOut = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`;

const sunRise = keyframes`
  0% { transform: translateY(10px) scale(0.95); opacity: 0.7; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
`;

const glow = keyframes`
  0%,100% { box-shadow: 0 0 20px rgba(255,140,0,0.4); }
  50% { box-shadow: 0 0 40px rgba(255,140,0,0.7); }
`;

const loadBar = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  &.show {
    animation: ${fadeIn} 0.3s ease forwards;
  }

  &.hide {
    animation: ${fadeOut} 0.4s ease forwards;
  }

  .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }

  /* SUN */

  .sun {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffcc33, #ff6f00);
    animation: ${sunRise} 0.6s ease forwards, ${glow} 2s ease-in-out infinite;
  }

  /* TEXT */

  h2 {
    font-size: 14px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #0f172a;
    font-weight: 700;
  }

  /* BAR */

  .bar {
    width: 100px;
    height: 3px;
    background: #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
  }

  .bar span {
    display: block;
    width: 40%;
    height: 100%;
    background: linear-gradient(to right, #6366f1, #14b8a6);
    animation: ${loadBar} 1.2s linear infinite;
  }
`;