import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  }
  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  // 마운팅 후, 렌더링 될 때마다
  useEffect( () => {
    console.log('🔴 렌더링');
  } );

  // 마운팅 후, 카운트 누를 때마다 렌더링.
  useEffect( () => {
    console.log('🟣 카운트시 렌더링');
  }, [count] );
  
  // 마운팅 후, input 입력할 때마다 렌더링.
  useEffect( () => {
    console.log('🟡 input입력시 렌더링');
  }, [name] );

   // 마운팅 후 처음에만.
   useEffect( () => {
    console.log('🎈 처음 렌더링때만');
  }, [] );

  return (
    <>
      <button onClick={handleCountUpdate}>Update</button>
      <p>count: {count}</p>
      <input type="text" value={name} onChange={handleInputChange}/>
      <p>name: {name}</p>
    </>
  );
}

export default App;