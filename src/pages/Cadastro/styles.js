import {StyleSheet} from 'react-native';
import COLORS from '../../themes/colors.js'

const styles = StyleSheet.create({
    texto: {
        color: COLORS.BLUE_3,
        marginVertical:5,
    },

    input: {
        borderRadius:15,
        backgroundColor:COLORS.GREY_1,
        paddingVertical:2,
        paddingHorizontal:10,
        marginBottom: 15,
    },

    next: {
        color: "#ffffff",
        borderRadius:15,
        marginHorizontal:40,
        marginVertical:20,
        backgroundColor:COLORS.BLUE_3,
        padding: 10,
        alignSelf: 'flex-start',
    }

})

export default styles;