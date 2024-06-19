import { Clicker } from "./Clicker";
import { useState } from 'react'

export default function App({children}) {
    const [hasClicker, setHasClicker] = useState(true)
    return <>
            {children}
            <button onClick={() => setHasClicker(!hasClicker)}>Clicker</button>
            { hasClicker && <>
                <Clicker keyName="countA" color={ `hsl(${ Math.random() * 360 }deg, 100%, 70%)` } />
                <Clicker keyName="countB" color={ `hsl(${ Math.random() * 360 }deg, 100%, 70%)` } />
                <Clicker keyName="countC" color={ `hsl(${ Math.random() * 360 }deg, 100%, 70%)` } />
             </>
            }
        </>

}