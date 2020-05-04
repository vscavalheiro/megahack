import React, {Fragment} from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import UserView from '../../components/UserView/UserView';


const Home = () => {
    return (
        <Fragment>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo_cabecalho}>Home</Text>
            </View>
            <UserView />
        </Fragment>
    )

}


export default Home;