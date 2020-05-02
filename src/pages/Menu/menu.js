import React, {Fragment, useState} from 'react';
import styles from './styles'


import NavBar from '../../components/NavBar/NavBar'
import Home from '../../pages/Home/home'
import Gastos from '../../pages/Gastos/gastos'
import Cards from '../../pages/Cards/cards'
import Chat from '../../pages/Chat/chat'

const Texto = () => {

    // seções do menu
    // 0=home 1=gastos 2=chat 3=cards
    const [ secaoMenu, setSecaoMenu ] = useState(0); 

    // recebe inteiro para alterar a seção do menu
    const handleSetSecaoMenu = (num) => {
        setSecaoMenu(num)
    }

    switch (secaoMenu) {
        case 0:
          return (
                <Fragment>
                    <Home />
                    <NavBar f_setSecaoMenu={handleSetSecaoMenu}
                    />
                </Fragment> 
            )
        case 1:
            return (
                <Fragment>
                    <Gastos />
                    <NavBar f_setSecaoMenu={handleSetSecaoMenu}
                    />
                </Fragment> 
                )
        case 2:
            return (
                <Fragment>
                    <Chat />
                    <NavBar f_setSecaoMenu={handleSetSecaoMenu}
                    />
                </Fragment> 
                )
        case 3:
            return (
                <Fragment>
                    <Cards />
                    <NavBar f_setSecaoMenu={handleSetSecaoMenu}
                    />
                </Fragment> 
                )
        default:
            return (
                <Fragment>
                    <Home />
                    <NavBar />
                </Fragment> 
                )
      }
    

}


export default Texto;