import { useState, useEffect } from 'react'
export function Clicker({color}) {
    const [ count, setCount ] = useState(parseInt(localStorage.getItem('count') ?? 0))
    useEffect(() =>
    {
        return () =>
        {
            localStorage.removeItem('count')
        }
    }, [])

    useEffect(() =>
    {
        localStorage.setItem('count', count)
    }, [ count ])

    return (
        <div>
            <div style={{color:color}}>Clicks count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}