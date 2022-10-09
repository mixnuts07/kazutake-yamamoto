import { useState, useRef } from "react";
import { Mesh } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function Cube(props) {
  const [wireFrame, setWireFrame] = useState(false);
  const ref = useRef({} as Mesh);
  useFrame(() => {
    ref.current.rotation.x += 0.013;
    ref.current.rotation.y += 0.03;
    ref.current.rotation.z += 0.015;
  });
  return (
    <mesh {...props} ref={ref} onClick={() => setWireFrame(!wireFrame)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="whitesmoke" wireframe={wireFrame} />
    </mesh>
  );
}
function CubeFrame(props) {
  const [wireFrame, setWireFrame] = useState(true);
  const ref = useRef({} as Mesh);
  useFrame(() => {
    ref.current.rotation.x += 0.013;
    ref.current.rotation.y += 0.03;
    ref.current.rotation.z += 0.015;
  });
  return (
    <mesh {...props} ref={ref} onClick={() => setWireFrame(!wireFrame)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="whitesmoke" wireframe={wireFrame} />
    </mesh>
  );
}

const ThreeObj = () => {
  return (
    <div className="pt-20">
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <Cube position={[0, 0, 0]} />
        <CubeFrame position={[-1, -1, -1]} />
        <Cube position={[1, 1, 1]} />
        <CubeFrame position={[1, -1, 1]} />
        <Cube position={[-1, 1, -1]} />
        <Stars
          radius={100}
          depth={50}
          count={1000}
          factor={4}
          saturation={1}
          fade
        />
      </Canvas>
    </div>
  );
};

export default ThreeObj;
