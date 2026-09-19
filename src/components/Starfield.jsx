import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function Starfield() {
  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
      camera={{ position: [0, 0, 1] }}
    >
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </Canvas>
  );
}

export default Starfield;
