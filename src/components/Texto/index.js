import React, {Fragment} from 'react';
import {Text} from 'react-native'
import styles from './styles'


const Texto = () => {
    return (
        <Fragment>
            <Text style={styles.texto}>Exemplo</Text>
            <Text style={styles.texto}>de</Text>
            <Text style={styles.texto}>Componete</Text>
        </Fragment>
    )

}


export default Texto;