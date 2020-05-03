import { StyleSheet } from 'react-native';
import COLORS from "../../themes/colors";

const styles = StyleSheet.create({
    containerGasto: {
        flexDirection: "column",
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: COLORS.BLUE_4,
        borderRadius: 10,
        overflow: "hidden",
    },

    header: {
        flexDirection: "row",
        alignItems: "center"
    },

    nomeData: {
        flex: 1
    },

    valor: {

        
    },

    texto: {
        color: "#ffffff"
    }
})

export default styles;