import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { extend, useFrame, useThree } from '@react-three/fiber'

extend({ OrbitControls })
export default function Experience()
{
    const cubeRef = useRef()
    const groupRef = useRef()
    const {camera, gl} = useThree()

    useFrame((state, delta) =>
    {
        cubeRef.current.rotation.y += delta
        // groupRef.current.rotation.y += delta
    })
    return <>
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 2.5 }/>
        <ambientLight intensity={ 1.5 } />

        <orbitControls args={ [ camera, gl.domElement ] } />
        <group ref={groupRef}>
            <mesh position-x={ - 2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>

            <mesh  ref={ cubeRef } rotation-y={ Math.PI * 0.25 } position-x={ 2 } scale={ 1.5 }>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
        </group>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
    </>
}