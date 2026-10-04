import { createRoot } from 'react-dom/client';
import DotField from './DotField.jsx';

const mount = document.getElementById('dot-field-root');
if (!mount) throw new Error('DotField mount element was not found');

createRoot(mount).render(
  <DotField
    dotRadius={1.5}
    dotSpacing={14}
    bulgeStrength={67}
    glowRadius={160}
    sparkle={false}
    waveAmplitude={0}
  />
);
