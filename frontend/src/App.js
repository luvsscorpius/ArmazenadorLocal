import React, {useState} from 'react'
import Main from './Components/Main/Main';
import Grid from './Components/Grid/Grid';

function App() {
  const [info, setInfo] = useState({nome: "", sobrenome: "", data: ""})

  return (
    <>
      <Main setInfo={setInfo} info={info}/>
      <Grid info={info}/>
    </>
  );
}

export default App;
