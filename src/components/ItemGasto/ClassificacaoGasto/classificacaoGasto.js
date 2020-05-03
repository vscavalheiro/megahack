import React, { useState} from 'react';
import { Picker, Text, View } from 'react-native';
import styles from './styles';

// CATEGORIAS :
// CASA = 0
// TRANSPORTE = 1
// ALIMENTAÇÃO = 2
// ROUPAS = 3
// EDUCAÇÃO = 4
// ENTRETENIMENTO = 5
// SERVIÇOS = 6
// VÁRIOS = 7

const ClassificacaoGasto = (props) => {

    const [selected, setSelected] = useState(0);

    return (
        <View style = {styles.container} >
            <View style = {styles.viewTexto}>
                <Text style = {styles.texto}>Categorias :</Text>
            </View>           

            <View style = {styles.viewPicker}>
                <Picker
                    mode='dropdown'
                    style = {styles.pickerCategoria}
                    selectedValue = {selected}
                    onValueChange={(itemValue, itemIndex) => {props.f_setCategoria(itemValue); setSelected(itemValue);}}
                >
                    <Picker.Item label="Casa"           value="0" />
                    <Picker.Item label="Transporte"     value="1" />
                    <Picker.Item label="Refeição"       value="2" />
                    <Picker.Item label="Roupas"         value="3" />
                    <Picker.Item label="Educação"       value="4" />
                    <Picker.Item label="Lazer"          value="5" />
                    <Picker.Item label="Serviços"       value="6" />
                    <Picker.Item label="Vários"         value="7" />
                </Picker>
            </View>
        </View>
    ); 
}

export default ClassificacaoGasto