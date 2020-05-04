import React, {Fragment, useState} from 'react'
import {AsyncStorage} from 'react-native'
import Menu from './src/pages/Menu/menu'
import Cadastro from './src/pages/Cadastro/cadastro'
import Robo from './src/pages/Robo/robo'



export default function App() {

  const CADASTRO_PAGE = 0;
  const ROBO_PAGE = 1;
  const MENU_PAGE = 2;

  let inicioSecaoApp = CADASTRO_PAGE

  // seções do app
  // 0=cadastro 1=robo 2=menu
  const [ secaoApp, setSecaoApp ] = useState(inicioSecaoApp); 
  const [ dataCadastro, setDataCadastro ] = useState({}); 

  const handleSetSecaoApp = (num) => {
    setSecaoApp(num)
  }

  const handleSetDataCadastro = (obj) => {
    setDataCadastro(obj)
  }

  switch (secaoApp) {
    case CADASTRO_PAGE:
      return (
        <Cadastro
          f_setSecaoApp={handleSetSecaoApp}
          f_setDataCadastro={handleSetDataCadastro}/>
      );
    case ROBO_PAGE:
      return (
        <Robo
          f_setSecaoApp={handleSetSecaoApp}
          nome={dataCadastro.nome}/>
      );
    case MENU_PAGE:
      return (
        <Menu/>
      );
  }
  
}
