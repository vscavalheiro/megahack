import React, {Fragment} from 'react';
import { Text , View} from 'react-native';
import styles from './styles';
import ItemGasto from '../../components/ItemGasto/itemGasto';


const Gastos = () => {
    return (
        <View style={styles.cabecalho}>
            <Text style={styles.titulo_cabecalho}>Lista de gastos</Text>
            <ItemGasto />
        </View>
    )

}


export default Gastos;