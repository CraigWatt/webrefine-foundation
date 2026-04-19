'use client';

import type { ThreeElements } from '@react-three/fiber';
import { ThreeCanvas } from '../Canvas';
import { useSpin } from '../hooks/useSpin';

function SpinningBox(props: ThreeElements['mesh']) {
  const ref = useSpin(0.8);

  return (
    <mesh ref={ref} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4f83ff" />
    </mesh>
  );
}

export function IntroScene() {
  return (
    <ThreeCanvas>
      <color attach="background" args={['#08111f']} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <SpinningBox position={[-1.2, 0, 0]} />
      <SpinningBox position={[1.2, 0, 0]} />
    </ThreeCanvas>
  );
}
