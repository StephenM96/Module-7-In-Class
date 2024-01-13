import { useRef, useState } from "react";

export default function RefCounter(){
const [countState, setCountState] = useState(0)

    let countRef = useRef(0);
    let count = 0

    function handleClick() {
        countRef.current = countRef.current + 1
        count = count + 1
        alert(`You clicked ${countRef.current} (${count}) times!`)
    }

    return (
        <div className="RefCounter componentBox">
            <button onClick={handleClick}>
                REFCOUNTER: Click Me!
            </button>
            <br />
            Count: {count}
            <br />
            CountRef: {countRef.current}
            <br />
            <button onClick={() => setCountState(countState + 1)}>
                STATE COUNTER: Click me to update!
            </button>
            <br />
            State: {countState}
        </div>
    )
}