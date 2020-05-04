import React, {Fragment, useState} from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import DataUser from "../../data/usuario.json"
import DataCategorias from "../../data/categorias.json"



const UserView = () => {
  
    return (
        <View>
            <View style={styles.view_user}>
                <View style={styles.header_categoria}>
                    <Text style={styles.titulo_categorias}>Usuário</Text>
                </View>
                <Text style={styles.nome}>{DataUser.nome} {DataUser.sobrenome}</Text>
                <Text style={styles.nome}>{DataUser.idade} anos</Text>
                <Text style={styles.nome}>Renda mensal: {DataUser.renda_mensal} R$</Text>
            </View>
            <View style={styles.view_user}>
                <View style={styles.header_categoria}>
                    <Text style={styles.titulo_categorias}>Gastos Totais</Text>
                </View>
                {DataCategorias.map((categoria, index) => {
                    return (<Text style={styles.categoria}>{categoria.categoria} - Total: {categoria.total} R$</Text> 
                            )
                })}

            </View>
        </View>

        
    )
}


export default UserView;