import {StyleSheet} from 'react-native';
import COLORS from '../../themes/colors.js'

const styles = StyleSheet.create({
    view_user:{
        backgroundColor: COLORS.GREY_1,
        marginHorizontal: 20,
        marginVertical: 20,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
        elevation: 10,
        paddingBottom: 14
    },
    nome: {
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 6
    },
    renda: {
        fontSize: 20,
        marginHorizontal: 10,
        marginTop: 10
    },
    header_categoria:{
        backgroundColor: COLORS.BLUE_1,
        marginHorizontal: 20,
        marginVertical: 8,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
        elevation: 10,
    },
    titulo_categorias:{
        fontSize: 20,
        textAlign: "center",
        marginVertical: 6
    },
    categoria: {
        fontSize: 16,
        textAlign: "center",
        marginVertical:5 
    }

    

})

export default styles;