import Modal from 'react-native-modal';
import React, {Fragment, useState} from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'



const Card = (props) => {

    const [isClicked, setIsClicked] = useState(false)
    
    const handleSetIsClicked = () => {
        setIsClicked(!isClicked)
    }

    
    return (

        
        <View>
            <TouchableOpacity onPress={handleSetIsClicked.bind(this)}>
                <View style={styles.card}>
                    <Text style={styles.titulo}>{props.cardInfo.titulo}</Text>
                    <Text style={styles.subtitulo}>{props.cardInfo.n_ideias} Ideias - por {props.cardInfo.autor}</Text>
                </View>            
            </TouchableOpacity>
            
            <Modal 
                isVisible={isClicked}
                onBackdropPress={handleSetIsClicked.bind(this)}
                animationIn="zoomIn"
                animationOut="zoomOut"
            >
                <ScrollView>
                    <View style={styles.popup}> 
                        <View style={styles.popupHeader}>
                            <Text style={styles.popupTitle}>{props.cardInfo.titulo}</Text>
                        </View>
                        <View style={styles.popupTextArea}>
                            {props.cardInfo.ideias.map((ideia, index) => {
                                return <View style={styles.ideias_back}><Text style={styles.popupText}> ❁ {ideia}</Text></View>
                            })}                        
                        </View>
                        <View style={styles.autor}>
                            <Text style={styles.text_autor}>Autor: {props.cardInfo.autor}</Text>

                        </View>
                    </View>
                </ScrollView>
                
            </Modal>    
            
        </View>
    )
}


export default Card;