import { createRoot } from 'react-dom/client';
import LiquidEther from './LiquidEther.jsx';

const mount = document.getElementById('liquid-ether-root');
if (!mount) throw new Error('LiquidEther mount element was not found');

const root = createRoot(mount);
const colors = ['#5227FF', '#FF9FFC', '#B497CF'];

function renderLiquidEther() {
  if (document.body.dataset.view !== 'login') {
    root.render(null);
    return;
  }

  root.render(
    <LiquidEther
      colors={colors}
      mouseForce={20}
      cursorSize={100}
      isViscous
      viscous={30}
      iterationsViscous={32}
      iterationsPoisson={32}
      resolution={0.5}
      isBounce={false}
      autoDemo
      autoSpeed={0.5}
      autoIntensity={2.2}
      takeoverDuration={0.25}
      autoResumeDelay={3000}
      autoRampDuration={0.6}
      style={{ width: '100%', height: '100%' }}
    />
  );
}

window.addEventListener('attendance:render', renderLiquidEther);
renderLiquidEther();
