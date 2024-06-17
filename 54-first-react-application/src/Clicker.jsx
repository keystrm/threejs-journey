import { useState, useEffect } from 'react'
export function Clicker() {
    const [count, setCount] = useState(0)
    useEffect(() =>
    {
        const savedCount = parseInt(localStorage.getItem('count') ?? 0)
        setCount(savedCount)
    }, [])
    
    useEffect(() =>
    {
        localStorage.setItem('count', count)
    }, [ count ])

    return (
        <div>
            <div>Clicks count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}