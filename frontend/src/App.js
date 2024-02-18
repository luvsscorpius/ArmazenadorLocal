import React, {useState, useEffect} from 'react'
import Main from './Components/Main/Main';
import Grid from './Components/Grid/Grid';
import * as C from './Components/Main/Styles'
import Footer from './Components/Footer/Footer';

function App() {
  const [info, setInfo] = useState([])
  // Pegando as informações do localStorage
  const infoLocalStorage = JSON.parse(localStorage.getItem('inf')) || []

  useEffect(() => {
    // Carregando os dados do localStorage dentro do estado principal
    setInfo(infoLocalStorage)
  }, [])

  useEffect(() => {
    // Atualizar o localStorage sempre que os dados do estado mudarem
    localStorage.setItem('inf', JSON.stringify(info))
  }, [info])

  return (
    <>
      <C.GlobalStyle />
      <Main setInfo={setInfo} info={info || []}/>
      <Grid info={info || []} setInfo={setInfo} infoLocalStorage={infoLocalStorage}/>
      <Footer/>
    </>
  );
}

export default App;
