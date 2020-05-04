import React, {Fragment} from 'react';
import { Text, View } from 'react-native'
import styles from './styles';


const Home = () => {
    return (
        <Fragment>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo_cabecalho}>Home</Text>
            </View>
        </Fragment>
    )

}


export default Home;