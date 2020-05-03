import Modal from 'react-native-modal';
import React, {Fragment, useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
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
                <View style={styles.popup}> 
                    <View style={styles.popupHeader}>
                         <Text style={styles.popupTitle}>{props.cardInfo.titulo}</Text>
                    </View>
                    <View style={styles.popupTextArea}>
                        <Text style={styles.popupText}>{props.cardInfo.ideias}</Text>
                    </View>
                </View>
                
            </Modal>    
            
        </View>
    )
}


export default Card;