import React, {Fragment} from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import UserView from '../../components/UserView/UserView';


const Home = (props) => {
    console.log(props,"blalala")
    return (
        <Fragment>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo_cabecalho}>Home</Text>
            </View>
            <UserView 
                dataCadastro={props.dataCadastro}
                dataGastos = {props.dataGastos}
            />
        </Fragment>
    )

}


export default Home;