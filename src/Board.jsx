import { useGLTF, Center } from '@react-three/drei'

export function Board({ board, onFieldClick, ...props }) {
  const { nodes, materials } = useGLTF('./Board.glb'); 
  
  const spacingX = 1.0; 
  const spacingY = 1.0; 

  const gridOffsetX = 0; 
  const gridOffsetY = 0; 

  return (
    <group {...props} dispose={null}>
      
      <Center>
        <mesh geometry={nodes.Cube.geometry} material={materials['Material.001']} />
      </Center>

      <group position={[gridOffsetX, gridOffsetY, 0]}>
        {board.map((row, rIndex) =>
          row.map((cell, cIndex) => {
            if (!cell) return null;
            return (
              <mesh
                key={`${rIndex}-${cIndex}`}
                position={[
                  (cIndex - 3) * spacingX,       
                  (2.5 - rIndex) * spacingY,     
                  0
                ]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
                <meshStandardMaterial color={cell === 'r' ? 'red' : 'yellow'} />
              </mesh>
            )
          })
        )}

        {Array.from({ length: 7 }).map((_, colIndex) => (
          <mesh
            key={`hitbox-${colIndex}`}
            position={[
              (colIndex - 3) * spacingX, 
              0, 
              0.5
            ]}
            onClick={(e) => {
               e.stopPropagation();
               onFieldClick(colIndex);
            }}
            visible={false}
          >
            <boxGeometry args={[spacingX * 0.9, spacingY * 7, 0.5]} /> 
            <meshStandardMaterial color="hotpink" transparent opacity={0.3} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

useGLTF.preload('./Board.glb');