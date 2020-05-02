import React, {Fragment} from 'react';
import { Text , View} from 'react-native';
import styles from './styles';
import ItemGasto from '../../components/ItemGasto/itemGasto';


const Gastos = () => {
    return (
        <View style={styles.page}>
            <ItemGasto />
        </View>
    )

}


export default Gastos;