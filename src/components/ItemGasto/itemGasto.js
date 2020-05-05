import React, {Fragment, useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

import AvaliacaoTarefa from "./AvaliacaoTarefa/avaliacaoTarefa";
import ClassificacaoGasto from "./ClassificacaoGasto/classificacaoGasto";


const ItemGasto = (props) => {

    const [isClicked, setIsClicked] = useState(false);

    const [sliderSize, setSliderSize] = useState(0);

    const [categoria, setCategoria] = useState(props.categoria)
    const handleSetCategoria = (categoria) => {
        setCategoria(categoria)
    }

    const [nota, setNota] = useState(props.nota)
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
                    <Text style = {styles.texto}>{props.titulo}</Text>
                    <Text style = {styles.texto}>{props.dia}/{props.mes}</Text>
                </View>
                    
                <View style = {styles.valor}>
                    <Text style = {styles.texto}>{`R$ ${props.preco.toFixed(2)}`}</Text>
                </View>
            </TouchableOpacity>

            {isClicked?
            <View style = {{ marginHorizontal: 10}} onLayout = {(event) => setSliderSize(event.nativeEvent.layout.width) }>
                <AvaliacaoTarefa sliderLength = {sliderSize} f_setNota={handleSetNota} value = {nota} />
                <ClassificacaoGasto f_setCategoria={handleSetCategoria} categoria={categoria} />
                <TouchableOpacity style={{alignSelf:"flex-end"}} onPress={() => { handleSetIsClicked(); props.f_setGastos(props.id,nota,categoria)}}>
                    <Text style={styles.next}>Confirmar</Text>
                </TouchableOpacity>
            </View>
            :
            null
            }

            

        </View>
    );
}

export default ItemGasto