import React, {Fragment,useState} from 'react';
import { Text , View} from 'react-native';
import styles from './styles';
import ItemGasto from '../../components/ItemGasto/itemGasto';


const Gastos = (props) => {

    return (
        <Fragment>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo_cabecalho}>Lista de gastos</Text>
            </View>
            <View style={styles.page}>
                {props.dataGastos.map((item) => <ItemGasto f_setGastos={props.f_setGastos} id = {item.id} titulo={item.titulo} categoria ={item.categoria} dia={item.dia} mes={item.mes} preco={item.preco} nota={item.nota} />)}
            </View>    
        </Fragment>
        
    )

}


export default Gastos;