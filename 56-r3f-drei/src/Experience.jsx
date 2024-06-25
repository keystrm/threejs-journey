import { Text, Html, PivotControls, TransformControls, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
export default function Experience()
{
    const cube = useRef()
    const sphere = useRef()
    return <>
        <OrbitControls makeDefault />
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <PivotControls
            anchor={ [ 0, 0, 0 ] }
            depthTest={ false }
            lineWidth={ 4 }
            axisColors={ [ '#9381ff', '#ff4d6d', '#7ae582' ] }
            scale={ 100 }
            fixed={ true }
        >
            <mesh ref={ sphere } position-x={ - 2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
                <Html
                    position={ [ 1, 1, 0 ] }
                    wrapperClass="label"
                    center
                    distanceFactor={ 8 }
                    occlude={ [ sphere, cube ] }
                >
                    That's a sphere 👍
                </Html>
            </mesh>
        </PivotControls>

        <TransformControls object={ cube } mode="rotate" >
            <mesh ref={ cube } position-x={ 2 } scale={ 1.5 }>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
        </TransformControls>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
        <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={ 1 }
            color="salmon"
            position-y={ 2 }
            maxWidth={ 2 }
            textAlign="center"
        >
            I LOVE R3F
        </Text>
    </>
}