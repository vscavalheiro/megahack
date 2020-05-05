import {StyleSheet} from 'react-native';
import COLORS from '../../themes/colors.js'

const styles = StyleSheet.create({
    page: {
        padding: 30,
    },
    cabecalho: {
        backgroundColor: COLORS.GREY_1,  
        borderBottomWidth: 2.5,
        borderBottomColor: COLORS.BLUE_4,
        height: 80,
        
    },
    titulo_cabecalho:{
        fontSize: 23,
        textAlign: "center",
        paddingTop: 38,
        color: COLORS.BLUE_4,
        fontWeight: '700',
        marginBottom: 20
    },
})

export default styles;