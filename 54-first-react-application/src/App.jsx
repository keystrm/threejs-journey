import { Clicker } from "./Clicker";
import { useState } from 'react'

export default function App() {
    const [hasClicker, setHasClicker] = useState(true)
    return <>
            <button onClick={() => setHasClicker(!hasClicker)}>Clicker</button>
            { hasClicker && <>
             <Clicker />
             <Clicker />
             <Clicker /> 
             </>
            }
        </>

}