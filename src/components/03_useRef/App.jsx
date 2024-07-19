import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  // Ref는 하나의 object
  // Ref에 접근할 때에는 countRef.current 를 사용.

  console.log('💬 렌더링...');
  const increaseCountState = () => {
    setCount( count + 1 );
  }

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref: ", countRef.current);
  }

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
}

export default App;