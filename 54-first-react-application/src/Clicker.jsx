import { useState } from 'react'
export function Clicker() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>Clicks count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}