import {StyleSheet} from 'react-native';
import COLORS from '../../themes/colors.js'

const styles = StyleSheet.create({
    texto: {
        color: COLORS.BLUE_3,
    },
    cabecalho: {
        height: 80,
        padding: 40,
        backgroundColor: COLORS.BLUE_4,       

    },
    titulo_cabecalho:{
        fontSize: 20,
        textAlign: "center",
    },
})

export default styles;