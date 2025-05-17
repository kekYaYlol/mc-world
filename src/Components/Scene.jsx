import { OrbitControls } from "@react-three/drei";
import Ground from "./Ground";
import { useState } from "react";
import Block from "./Block";

export default function Scene() {
    const [blocks, setBlocks] = useState([]);
    const[selectedBlock, setSelectedBlock] = useState(null);

    const handleAddBlock = (position) => {
        const key = position.join(', ');
        if (!blocks.some((b) => b.join(', ') === key)) {
            setBlocks((prev) => [...prev, position]);
        }
        
    };

    const handleRemoveBlock = (position) => {
        const key = position.join(', ');
        setBlocks((prev) => 
            prev.filter((p) => !(p[0] === position[0] && p[1] === position[1] && p[2] === position[2]))
        );

    return (
        <>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={0.7} castShadow />

            <OrbitControls />

            <Ground onAddBlock={handleAddBlock}/>
            {/* <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#4CAF50" />
            </mesh> */}

            {blocks.map((pos, idx) => (
                <Block key={idx} position={pos} 
                onClick={handleAddBlock}
                onRemove={handleRemoveBlock}/>
            ))}

        </>
    );
}