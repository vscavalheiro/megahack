import React, {Fragment} from 'react';
import { Text , View} from 'react-native';
import styles from './styles';
import ItemGasto from '../../components/ItemGasto/itemGasto';


const Gastos = () => {
    return (
        <Fragment>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo_cabecalho}>Lista de gastos</Text>
            </View>
            <View style={styles.page}>
                <ItemGasto />
                <ItemGasto />
                <ItemGasto />
                <ItemGasto />
            </View>    
        </Fragment>
        
    )

}


export default Gastos;