import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Mesh } from 'three';

export function useSpin(speed = 1) {
  const ref = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed * 0.75;
  });

  return ref;
}
