import { Clicker } from "./Clicker";
import { useState } from 'react'

export default function App({children}) {
    const [hasClicker, setHasClicker] = useState(true)
    const [count,setCounter] = useState(0)

    const increment = () => {
        setCounter(count+1)
    }

    return <>
            {children}
            <button onClick={() => setHasClicker(!hasClicker)}>Clicker</button>
            { hasClicker && <>
                <Clicker increment={increment} keyName="countA" color={ `hsl(${ Math.random() * 360 }deg, 100%, 70%)` } />
                <Clicker increment={increment} keyName="countB" color={ `hsl(${ Math.random() * 360 }deg, 100%, 70%)` } />
                <Clicker increment={increment} keyName="countC" color={ `hsl(${ Math.random() * 360 }deg, 100%, 70%)` } />
             </>
            }
            <div>Total count : {count}</div>
        </>

}