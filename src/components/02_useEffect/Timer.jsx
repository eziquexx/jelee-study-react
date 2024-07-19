import { useEffect, useState } from "react";

function Timer() {
  // 마운팅 됐을 때 setInterval 실행됨
  // 언마운팅 됐을 때에도 setInterval은 실행되고 있음 (콘솔창 확인)
  // 그래서 언마운팅 되었을 때 정리작업 해줘야한다.
  // 정리작업 = Clean Up
  useEffect( () => {
    const timer = setInterval( () => {
      console.log('타이머 작동중...');
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('타이머가 종료됨!');
    }
  }, [] );

  return (
    <div>타이머가 시작되었습니다. 콘솔창 확인해주세요.</div>
  );
}

export default Timer;