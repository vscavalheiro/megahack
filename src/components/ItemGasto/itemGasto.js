import React, {Fragment, useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

import AvaliacaoTarefa from "./AvaliacaoTarefa/avaliacaoTarefa";
import ClassificacaoGasto from "./ClassificacaoGasto/classificacaoGasto";


const ItemGasto = props => {

    const [isClicked, setIsClicked] = useState(false);

    const [sliderSize, setSliderSize] = useState(0);

    const [categoria, setCategoria] = useState(0)
    const handleSetCategoria = (categoria) => {
        setCategoria(categoria)
        console.log(categoria)
    }

    const [nota, setNota] = useState(5)
    const handleSetNota = (nota) => {
        setNota(nota)
    }

    const handleSetIsClicked = () => {
        setIsClicked(!isClicked)
    }

    return(
        <View style={styles.containerGasto} >
            <TouchableOpacity 
                style = {styles.header}
                onPress={handleSetIsClicked.bind(this)}
                activeOpacity={1}
                >
                <View  style = {styles.nomeData}>
                    <Text style = {styles.texto}>Alimentação</Text>
                    <Text style = {styles.texto}>02/05/20</Text>
                </View>
                    
                <View style = {styles.valor}>
                    <Text style = {styles.texto}>R$ 10,00</Text>
                </View>
            </TouchableOpacity>

            {isClicked?
            <View style = {{ marginHorizontal: 10}} onLayout = {(event) => setSliderSize(event.nativeEvent.layout.width) }>
                <AvaliacaoTarefa sliderLength = {sliderSize} f_setNota={handleSetNota} />
                <ClassificacaoGasto f_setCategoria={handleSetCategoria} categoria={categoria} />
            </View>
            :
            null
            }

        </View>
    );
}

export default ItemGasto