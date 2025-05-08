import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);

    let incCnt = () => {
        setCount(count + 1)
    } 

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={incCnt}>Increase Count</button>
        </div>
    )
}