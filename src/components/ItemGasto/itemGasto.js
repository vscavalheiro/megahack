import React, {Fragment, useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

import AvaliacaoTarefa from "./AvaliacaoTarefa/avaliacaoTarefa";

const ItemGasto = props => {

    const [isClicked, setIsClicked] = useState(false)

    const handleSetIsClicked = () => {
        setIsClicked(!isClicked)
    }

    return(
        <TouchableOpacity 
        style={styles.containerGasto}
        onPress={handleSetIsClicked.bind(this)}
        activeOpacity={1}>
            <View style = {styles.header}>
                <View  style = {styles.nomeData}>
                    <Text style = {styles.texto}>Alimentação</Text>
                    <Text style = {styles.texto}>02/05/20</Text>
                </View>
                    
                <View style = {styles.valor}>
                    <Text style = {styles.texto}>R$ 10,00</Text>
                </View>
            </View>

            {isClicked?
            <AvaliacaoTarefa />
            :
            null
            }

        </TouchableOpacity>
    );
}

export default ItemGasto