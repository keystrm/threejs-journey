import { Clicker } from "./Clicker";
import { useState } from 'react'

export default function App({clickersCount,children}) {
    const [hasClicker, setHasClicker] = useState(true)
    const [count,setCounter] = useState(0)

    const increment = () => {
        setCounter(count+1)
    }

    return <>
            {children}
            <button onClick={() => setHasClicker(!hasClicker)}>Clicker</button>
            { hasClicker && <>
                { [...Array(clickersCount)].map((value, index) =>
                    <Clicker
                        key = {index}
                        increment={ increment }
                        keyName={ `count${index}` }
                        color={ `hsl(${ Math.random() * 360 }deg, 100%, 75%)` }
                    />
                ) }
        </> }
            <div>Total count : {count}</div>
        </>

}