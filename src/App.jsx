import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Model } from "./compenents/Model";
import { OrbitControls } from "@react-three/drei";
import { ModelColorChanger } from "./compenents/ModelColorChanger/ModelColorChanger";
import { useState } from "react";
import silverPng from "./assets/silver.png";
import goldPng from "./assets/gold.png";
import blackPng from "./assets/black.png";
import leather from "./assets/leather_baseColor.jpg";
import { ChangeColorMetal } from "./compenents/ModelColorChanger/ChangeColorMetal";
import { Material } from "./compenents/Material/Material";

const mockColorBody = [
  {
    name: "Brown",
    color: "rgba(139, 69, 18, 1)",
  },
  {
    name: "Black",
    color: "rgba(26, 26, 26, 1)",
  },
  {
    name: "Blue",
    color: "rgba(16, 77, 151, 1)",
  },
];

const mockColorMetal = [
  { name: "silver", color: "rgba(255, 255, 255, 1)",  img: silverPng },
  { name: "gold", color: "rgba(255, 215, 0, 1)",  img: goldPng },
  { name: "black", color: "rgba(26, 26, 26, 1)",  img: blackPng },
  
];

function App() {
  const [colorBody, setColorBody] = useState(mockColorBody[0].color);
  const [colorMetal, setColorMetal] = useState(mockColorMetal[0].color);
  const [texturePath, setTexturePath] = useState(leather)
  return (
    <>
      <Canvas camera={{ position: [0, 0, 3], fov: 23 }}>
        <ambientLight intensity={4.9} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls />
        <Model position={[0, -0.23, 0]} colorBody={colorBody} colorMetal={colorMetal} texturePath={texturePath} />
      </Canvas>
      <div className="container">
        <ModelColorChanger
          title="body Color"
          colors={mockColorBody}
          color={colorBody}
          type={false}
          setColorBody={setColorBody}
        />
        <ChangeColorMetal
          title="Metal color"
          colors={mockColorMetal}
          type={true}
          color={colorMetal}
          setColorBody={setColorMetal}
        />
        <Material texturePath={texturePath} setTexturePath={setTexturePath}/>
      </div>
    </>
  );
}

export default App;
