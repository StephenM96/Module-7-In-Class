import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());
  const [tickCount, setTickCount] = useState(0);

  //     useEffect(() => {
  //         First //  main area for the code (axios, fetch, etc.)

  //         return () => {
  //             second // clean up functions
  //         }
  //     }, [third]) // dependency array

  const tick = () => {
    setDate(new Date());
    console.log("tick");
  };

  useEffect(() => {
    let clockInterval = setInterval(() => {
      tick();
      let currentCount = tickCount + 1;
      setTickCount(currentCount);
      console.log("tickCount", currentCount);
    }, 1000);
    console.log("Clock component mounted");
    return () => {
      console.log("Clock component unmounted");
      clearInterval(clockInterval);
    };
  }, [tickCount]);

  return (
    <div>
      <h3>Digitial Clock</h3>
      {date.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
