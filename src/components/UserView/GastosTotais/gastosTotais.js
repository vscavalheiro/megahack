import React from 'react';
import { Text, View } from 'react-native'
import styles from './styles'

const gastosTotais = (props) => {
    return(
        <View style={styles.view_user}>
            <View style={styles.header_categoria}>
                <Text style={styles.titulo_categorias}>Gastos Totais</Text>
            </View>
            {props.listaCategorias.map((categoria, index) => {
                return (<Text style={styles.categoria}>{categoria.categoria} - Total: {categoria.total} R$</Text> 
                        )
            })}
        </View>
    )
}

export default gastosTotais