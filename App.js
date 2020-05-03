import React, {Fragment, useState} from 'react';

import Menu from './src/pages/Menu/menu'
import Cadastro from './src/pages/Cadastro/cadastro';

import getDataCadastro from './src/data/getDataCadastro'

export default function App() {

  const CADASTRO_PAGE = 0;
  const MENU_PAGE = 1;


  let inicioSecaoApp = CADASTRO_PAGE

  if (getDataCadastro !== null) {
    // Caso queira reiniciar o cadastro, comente a linha abaixo, do contrario deixe descomentado

    inicioSecaoApp = MENU_PAGE
  }

  // seções do app
  // 0=cadastro 1=menu
  const [ secaoApp, setSecaoApp ] = useState(inicioSecaoApp); 

  const handleSetSecaoApp = (num) => {
    setSecaoApp(num)
  }

  switch (secaoApp) {
    case 0:
      return (
        <Cadastro f_setSecaoApp={handleSetSecaoApp} />
      );
    case 1:
      return (
        <Menu />
      );
  }
  
}
