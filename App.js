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
  const [ dataRobo, setDataRobo ] = useState({}); 
  const [ gastos, setGastos] = useState([
    {
        id: 0,
        titulo: "Saia",
        dia: "02",
        mes: "05",
        categoria: "0",
        nota: 5,
        preco: "100,00",
        isAvaliado: false
    }, 

    {
        id: 1,
        titulo: "Beto Carreiro",
        dia: "02",
        mes: "05",
        categoria: "0",
        nota: 5,
        preco: "800,00",
        isAvaliado: false
    },

    {
        id: 2,
        titulo: "Colégio do filho",
        dia: "02",
        mes: "05",
        categoria: "0",
        nota: 5,
        preco: "500,00",
        isAvaliado: false
    },

    {
        id: 3,
        titulo: "Obra do quarto",
        dia: "02",
        mes: "05",
        categoria: "0",
        nota: 5,
        preco: "100,00",
        isAvaliado: false
    }
])

const handleSetGastos = (idGasto, nota, categoria) => {
    let newGastos = gastos
    gastos.forEach((item,index) => 
        {
            if(item.id == idGasto) {
                let itemAlterado = item

                item.nota = nota;
                item.categoria = categoria;
                item.isAvaliado = true;

                newGastos[index] = itemAlterado
                setGastos(newGastos)
            }
        }
    );
    
    console.log(gastos);
}

  const handleSetSecaoApp = (num) => {
    setSecaoApp(num)
  }

  const handleSetDataCadastro = (obj) => {
    setDataCadastro(obj)
  }

  const handleSetDataRobo = (obj) => {
    setDataRobo(obj)
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
          f_setDataRobo={handleSetDataRobo}
          nome={dataCadastro.nome}/>
      );
    case MENU_PAGE:
      return (
        <Menu
          f_setGastos={handleSetGastos}
          dataGastos={gastos}
          dataCadastro={dataCadastro}
          dataRobo={dataRobo}
          />
      );
  }
  
}
