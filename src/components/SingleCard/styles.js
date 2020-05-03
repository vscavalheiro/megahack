import {StyleSheet} from 'react-native';
import COLORS from '../../themes/colors.js'

const styles = StyleSheet.create({
    texto: {
        color: COLORS.BLUE_3,
    },
    card: {
        backgroundColor: COLORS.GREY_1,
        marginHorizontal: 20,
        marginVertical: 8,
        borderRadius: 15,

    },
    titulo: {
        fontSize: 20,
        paddingVertical: 10,
        paddingLeft: 30,
    },
    subtitulo: {
        fontSize: 16,
        paddingVertical: 5,
        paddingLeft: 30
    },
    popup: {
        height:400,
        borderRadius:15,
        backgroundColor:'#ffffff'
    },
    popupHeader: {
        borderTopStartRadius:15,
        borderTopEndRadius:15,
        backgroundColor:COLORS.BLUE_3,
        paddingBottom:30,
        borderBottomWidth:1,
        borderBottomColor:COLORS.BLUE_5
    },
    popupTitle: {
        fontSize:20,
        left:20,
        right:20,
        top:10
    },
    popupTextArea: {
        width:"80%",
        top:20,
        left:"10%",
    },
    popupText: {
        fontSize: 12,
    }
})

export default styles;