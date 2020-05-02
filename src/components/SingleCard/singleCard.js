import React, {Fragment} from 'react';
import { Text, View } from 'react-native'
import styles from './styles'


const Card = (props) => {

    return (
        <Fragment>
            <View style={styles.card}>
                <Text style={styles.titulo}>{props.cardInfo.titulo}</Text>
                <Text style={styles.subtitulo}>{props.cardInfo.n_ideias} Ideias - por {props.cardInfo.autor}</Text>
            </View>            
        </Fragment>
    )

}


export default Card;