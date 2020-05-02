import React, {Fragment} from 'react';
import { Text, View } from 'react-native'
import styles from './styles'
import CardsList from '../../components/CardsList/cardsList'


const Cards = () => {
    return (
        <Fragment>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo_cabecalho}>Cards para você</Text>
            </View>
            <CardsList></CardsList>
        </Fragment>
    )

}


export default Cards;