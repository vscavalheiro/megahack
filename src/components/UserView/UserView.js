import React, {Fragment, useState} from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import DataCategorias from "../../data/categorias.json"
import COLORS from '../../themes/colors';
import Usuario from './Usuario/usuario'
import GastosTotais from './GastosTotais/gastosTotais'

const UserView = props => {
  
    return (
        <ScrollView style={{marginBottom:60}}>
            <Usuario 
                nome = {props.dataCadastro.nome}
                sobrenome = {props.dataCadastro.sobrenome}
                renda = {props.dataCadastro.renda}
            />
            <GastosTotais listaCategorias = {DataCategorias} />
        </ScrollView>    
    )
}


export default UserView;