import React, {useState, useEffect} from 'react'
import Main from './Components/Main/Main';
import Grid from './Components/Grid/Grid';

function App() {
  const [info, setInfo] = useState([
    
  ])

  useEffect(() => {
    if (info !== null) {
      console.log("info:", info);
      console.log("info.length:", info.length);
    }
  }, [info]);

  return (
    <>
      <Main setInfo={setInfo} info={info || []}/>
      <Grid info={info || []}/>
    </>
  );
}

export default App;
