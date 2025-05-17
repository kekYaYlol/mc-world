import React, { useState } from "react";
import './App.css';
import { Canvas } from "@react-three/fiber";
import Scene from "./Components/Scene";

function App() {
  const[selectedBlock, setSelectedBlock] = useState(null);

  return (
    <div className="App">
      <h1>Minecraft-World</h1>
      <div
      onContextMenu={(e) => {
        e.preventDefault();
        if (selectedBlock) {
          handleRemoveBlock(selectedBlock);
        }
      }}
      >
        <Canvas
        shadows
        camera={{ position: [5, 10, 10], fov: 50 }}
        style={{ width: '100vw', height: '100vh', background: '#B3E5FC'}}
      >
        <Scene />
      </Canvas>
      </div>
      
    </div>
  );
}

export default App;