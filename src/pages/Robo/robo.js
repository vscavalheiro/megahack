import React, {useState, Fragment} from 'react';
import styles from './styles'
import { Text , TouchableOpacity, AsyncStorage, View, TextInput, ScrollView} from 'react-native';

import RoboImagem from '../../components/RoboImagem/roboImagem';

const Robo = (props) => {
    
    const [roboName, setRoboName] = useState('')
    const [icon,setIcon] = useState(0)

    const handleSetIcon = (num) => {
        if( num === -1 && icon === 0) {
            setIcon(5)
        }
        if (num === 1 && icon === 5) {
            setIcon(0)
        }
        if ( !(num === -1 && icon === 0) && !(num === 1 && icon === 5)) {
            setIcon(icon + num)
        }
    }
    

    const saveDataRobo = () => {
        let newDataRobo = {
            nome:roboName,
            icon:icon 
        }
        console.log(newDataRobo)
        AsyncStorage.setItem('dataRobo', JSON.stringify(newDataRobo))
        .then(()=>{
        console.log('*** Data robo salva');
        })
        .catch((error)=>{
        console.log(error);
        }) 
    }
    


    return(
        <Fragment>
            <ScrollView style={{paddingHorizontal: 20}}>
                
                <View style={styles.roboSelector}>

                    <View style={styles.intro}>
                        <Text style={styles.textoIntro}>Olá, vou te apresentar ao seu novo amigo, ele vai te dar dicas, ajudar você a organizar seus gastos e te acompanhar nessa nova jornada.</Text>
                        <Text style={styles.textoIntro}>Agora, digite o nome que você quer dar pra ele !!</Text>
                    </View>
                    
                    <View style={styles.container}> 
                        <TouchableOpacity style={styles.addView} onPress={handleSetIcon.bind((this), -1)}>
                            <Text style={styles.plus}> {"<"} </Text>
                        </TouchableOpacity>

                        <RoboImagem  num={icon} />

                        <TouchableOpacity style={styles.addView} onPress={handleSetIcon.bind((this), 1)}>
                            <Text style={styles.plus}> {">"} </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.texto}>Nome :</Text>
                        <TextInput style={styles.input} placeholder='Digite o nome do seu robo' onChangeText={(input) => {setRoboName(input)}} value={roboName}/>
                    </View>
                </View>

                

            </ScrollView>
            
            <TouchableOpacity style={{alignSelf:"flex-end"}} onPress={() => {props.f_setSecaoApp(2), saveDataRobo() }}>
                    <Text style={styles.next}>Next   ></Text>
                </TouchableOpacity>
        </Fragment>
    );
}

export default Robo