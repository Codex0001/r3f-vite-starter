import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./avatar";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
      <Avatar />
      </group>
      
      {/* Lighting */}
      <ambientLight intensity={2.5} />
      
    </>
  );
};
