import { useState } from "react"


export default function Counter() {
    const [count, setCount] = useState(0);
    const AddCount = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const ReduceCount = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
  return (
    <div style={{border: '2px solid cyan', borderRadius: '20px'}}>
        <h3>Counter:{count}</h3>
        <button onClick={AddCount}>Add</button>
        <button onClick={ReduceCount}>Reduce</button>

    </div>
  )
}

