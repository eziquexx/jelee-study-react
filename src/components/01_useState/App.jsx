import { useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  
  const handleClick = () => {
    let newTime;

    if ( time >= 12 ) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }

    setTime(newTime);
  } 

  return (
    <div>
      <p>현재 시각: {time}시</p>
      <button onClick={ handleClick }>Update</button>
    </div>
  );
}


export default App;