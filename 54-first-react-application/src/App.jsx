import { Clicker } from "./Clicker";
import { useState,useMemo } from 'react'

export default function App({clickersCount,children}) {
    const [hasClicker, setHasClicker] = useState(true)
    const [count,setCounter] = useState(0)

    const increment = () => {
        setCounter(count+1)
    }
		
    const colors = useMemo(() =>
    {
        const colors = []
        for(let i = 0; i < clickersCount; i++)
            colors.push(`hsl(${ Math.random() * 360 }deg, 100%, 75%)`)
        return colors
    }, [clickersCount])

    return <>
            {children}
            <button onClick={() => setHasClicker(!hasClicker)}>Clicker</button>
            { hasClicker && <>
                { [...Array(clickersCount)].map((value, index) =>
                    <Clicker
                        key = {index}
                        increment={ increment }
                        keyName={ `count${index}` }
                        color={colors[index]}
                    />
                ) }
        </> }
            <div>Total count : {count}</div>
        </>

}