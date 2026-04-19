'use client';

import { Canvas, type CanvasProps } from '@react-three/fiber';

const defaultDpr: CanvasProps['dpr'] = [1, 2];
const defaultCamera: CanvasProps['camera'] = {
  position: [0, 0, 5],
  fov: 45,
};

export function ThreeCanvas(props: CanvasProps) {
  const {
    children,
    dpr = defaultDpr,
    camera = defaultCamera,
    style,
    ...rest
  } = props;

  const canvasStyle = {
    width: '100%',
    height: '100%',
    display: 'block',
    ...style,
  };

  return (
    <Canvas dpr={dpr} camera={camera} style={canvasStyle} {...rest}>
      {children}
    </Canvas>
  );
}
