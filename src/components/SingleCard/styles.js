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
    }
})

export default styles;