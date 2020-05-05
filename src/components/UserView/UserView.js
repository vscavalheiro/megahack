import React from 'react';
import { ScrollView } from 'react-native'
import styles from './styles'
import DataCategorias from "../../data/categorias.json"
import Usuario from './Usuario/usuario'
import GastosTotais from './GastosTotais/gastosTotais'
import Grafico from './Grafico/grafico'

const UserView = props => {  
    return (
        <ScrollView style={{marginBottom:60}}>
            <Usuario 
                nome = {props.dataCadastro.nome}
                sobrenome = {props.dataCadastro.sobrenome}
                renda = {props.dataCadastro.renda}
            />
            <GastosTotais listaCategorias = {DataCategorias} dataGastos = {props.dataGastos} />
            <Grafico dataGastos = {props.dataGastos} />
        </ScrollView>    
    )
}


export default UserView;