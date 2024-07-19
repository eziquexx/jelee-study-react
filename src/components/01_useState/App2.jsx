import { useState } from "react";


function App2(){
  const [names, setNames] = useState( () => {
    return ['홍길동', '김민수']
  } );

  // useState 초기값으로 무거운 작업이 실행되는 실행문이 있다면 어떠한 작업할 때 계속 렌더링이 된다.
  // 그렇기 때문에 useState() 함수 안에 값을 콜백함수로 처리하면 처음 렌더링 되었을 때에만 실행되고 그 후로 실행 안된다.
  // const [names, setNames] = useState( () => {
  //   return () => {
  //     console.log('무거운 작업 실행!!');
  //   }
  // } );

  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleUpload = () => {
    setNames( (names) => {
      console.log(names);
      return [input, ...names];
    })
  }

  return (
    <>
      <input type="text" onChange={ handleInputChange } value={input} />
      <button onClick={ handleUpload }>Upload</button>
      <p></p>
      { names.map( (name, idx) => {
        return (
          <p key={idx}>{idx} {name}</p>
        )
      } ) }

      {/* <p>{names[0]}</p>
      <p>{names[1]}</p> */}
    </>
  );
}

export default App;