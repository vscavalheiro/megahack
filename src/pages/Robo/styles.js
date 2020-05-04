import {StyleSheet} from 'react-native';
import COLORS from '../../themes/colors.js'

const styles = StyleSheet.create({
    next: {
        color: "#ffffff",
        borderRadius:15,
        marginHorizontal:40,
        marginVertical:20,
        backgroundColor:COLORS.BLUE_3,
        padding: 10,
        alignSelf: 'flex-start',
    },

    container: {
        flexDirection: "row",
        alignItems:'center',
        justifyContent: "center",
        marginBottom: 30
    },

    addView: {
        height: 25,
        width: 25,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.BLUE_3,
        justifyContent: 'center', 
        alignItems: 'center' ,
        marginHorizontal: 20,
    },

    plus: {
        marginBottom: 4,
        color: COLORS.BLUE_3,
        fontSize: 22,
    },

    roboSelector: {
        marginTop: '40%',
        flex:1,
        justifyContent: "center",
        flexDirection:'column',
    },

    texto: {
        color: COLORS.BLUE_3,
        marginVertical:5,
    },

    inputBox: {
        marginHorizontal:40
    },

    input: {
        borderRadius:15,
        backgroundColor:COLORS.GREY_1,
        paddingVertical:2,
        paddingHorizontal:10,
        marginBottom: 15,
    },

    intro: {
        marginHorizontal:40,
        marginBottom:30,
    },

    textoIntro: {
        color: COLORS.GREY_2,
        fontSize: 16,
    }

})

export default styles;