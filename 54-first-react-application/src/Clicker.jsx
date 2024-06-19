import { useState, useEffect } from 'react'
export function Clicker({keyName,color}) {
    const [ count, setCount ] = useState(parseInt(localStorage.getItem(keyName) ?? 0))
    useEffect(() =>
    {
        return () =>
        {
            localStorage.removeItem(keyName)
        }
    }, [])

    useEffect(() =>
    {
        localStorage.setItem(keyName, count)
    }, [ count ])

    return (
        <div>
            <div style={{color:color}}>Clicks count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}