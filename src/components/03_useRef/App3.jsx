import { useState, useRef, useEffect } from "react";

// Ref가 굉장히 유용한 상황
function App3() {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    // ref는 re-rendering을 발생시키지 않기 때문에
    // 무한루프에 빠지지 않는다.
    // useRef는 변화는 감지해야하지만
    // 그 변화가 렌더링을 발생시키면 안되는 어떤 값을 다룰때 편하다.
    renderCount.current = renderCount.current + 1;
    console.log('렌더링 수: ', renderCount.current);
  })
  // useEffect를 사용하여 render 확인해보려고하면
  // 아주 끔찍한 일이 발생한다.
  // 바로.. 무한 루프의 오류가 발생한다.
  // const [renderCount, setRenderCount] = useState(1);
  // useEffect(() => {
  //   console.log('렌더링!');
  //   setRenderCount(renderCount + 1);
  // });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  );
}

export default App3;