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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

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
        borderRadius:12,
        backgroundColor:COLORS.GREY_1,
        marginTop: 30,
        marginHorizontal: 10
        
    },
    popupHeader: {
        borderTopStartRadius:12,
        borderTopEndRadius:12,
        backgroundColor:COLORS.BLUE_2,
        paddingBottom:8,
        paddingTop: 8,
        borderBottomStartRadius: 8,
        borderBottomEndRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    popupTitle: {
        fontSize:20,
        textAlign: "center",
        paddingHorizontal: 20,
    },
    popupTextArea: {
        paddingBottom: 20,
        backgroundColor: COLORS.GREY_1,
        borderBottomStartRadius: 12,
        borderBottomEndRadius: 12,


    },
    ideias_back:{
        marginTop: 16,
        marginHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 8
    },
    popupText: {
        fontSize: 14,
        textAlign: "left",
        marginLeft: 6,
        marginTop: 6,
        marginBottom: 6
        
    },
    autor: {

    },
    text_autor: {
        textAlign: "right",
        marginRight: 10,
        marginBottom: 20
    }

})

export default styles;