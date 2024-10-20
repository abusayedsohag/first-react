import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleCounter = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleCounter2 = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
        }
    }

    return (
        <>
            <button onClick={handleCounter} onMouseMove={handleCounter2}>Counter : {count}</button>
        </>
    )
}