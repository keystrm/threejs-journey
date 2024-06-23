import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
export default function Experience()
{
    const cubeRef = useRef()
    const groupRef = useRef()
    useFrame((state, delta) =>
    {
        cubeRef.current.rotation.y += 0.01
        groupRef.current.rotation.y += delta
    })
    return <>
        <group ref={groupRef}>
            <mesh position-x={ - 2 }>
                <sphereGeometry />
                <meshBasicMaterial color="orange" />
            </mesh>

            <mesh  ref={ cubeRef } rotation-y={ Math.PI * 0.25 } position-x={ 2 } scale={ 1.5 }>
                <boxGeometry />
                <meshBasicMaterial color="mediumpurple" />
            </mesh>
        </group>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshBasicMaterial color="greenyellow" />
        </mesh>
    </>
}