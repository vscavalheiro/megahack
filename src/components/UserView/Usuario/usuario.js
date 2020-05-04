import React from 'react';
import { Text, View } from 'react-native'
import styles from './styles'

const Usuario = (props) => {
    return(
        <View style={styles.view_user}>
            <View style={styles.header_categoria}>
                <Text style={styles.titulo_categorias}>Usuário</Text>
            </View>
            <Text style={styles.nome}>{props.nome} {props.sobrenome}</Text>
            <Text style={styles.nome}>Renda mensal: R$ {props.renda}</Text>
        </View>
    )
}

export default Usuario