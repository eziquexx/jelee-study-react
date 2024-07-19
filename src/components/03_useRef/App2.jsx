import { useState, useRef } from "react";

function App2() {
  // ref와 변수의 차이
  // ref올려, var올려 버튼을 여러번 클릭 후 렌더! 버튼을 클릭하면 ref 값만 올라간다.
  // 왜냐하면 렌더링이 된다는 것은 즉 함수가 처음부터 실행이 된다는 뜻이다.
  // 그래서 변수는 값이 다시 초기화가 되기 때문에 화면에 값이 올라가지 않는다.
  // 반면에 ref는 렌더링이 되어도 값을 유지한다.
  // ref의 값은 컴포넌트의 전 생애주기를 통해 살아있기 때문이다.
  // 컴포넌트가 마운팅 된 시점부터 해제 될때까지 값을 유지할 수 있다는 뜻.

  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  }
  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref: ', countRef.current);
  }
  const increaseVar = () => {
    countVar = countVar + 1;
    console.log('var: ', countVar);
  }

  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  }

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>렌더!</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResults}>Ref Var 값 출력</button>
    </div>
  );
}

export default App2;