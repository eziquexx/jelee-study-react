import { useState } from "react";
import Timer from "./Timer";

function App2() {
  const [showTimer, setShowTimer] = useState(false);

  // button을 클릭하면 실행되는 함수
  // 함수 setShowTimer가 실행이 된다.
  // 실행문은 showTimer가 true이면 false로 바뀌고, false면 true로 바뀜.
  const handleShowTimer = () => {
    setShowTimer(!showTimer);
  }
  return (
    <>
      {/* && 연산자로 양쪽이 true면 Timer 컴포넌트가 화면에 보임 */}
      {showTimer && <Timer />}
      <button onClick={ handleShowTimer }>Toggle Timer</button>
    </>
  );
}

export default App2;