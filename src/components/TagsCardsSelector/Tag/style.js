import { StyleSheet } from 'react-native'
import COLORS from "../../../themes/colors";

const styles = StyleSheet.create({
    container_active: {
        flexDirection: "row",
        backgroundColor: COLORS.BLUE_3,
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: "center",
        borderRadius: 10,
        alignSelf: 'flex-start',
        margin:5,
    },

    container_disable: {
        flexDirection: "row",
        backgroundColor: COLORS.GREY_2,
        paddingHorizontal:10,
        paddingVertical:5,
        justifyContent: "center",
        borderRadius: 10,
        alignSelf: 'flex-start',
        margin:5,
    },

    text: {
        color: "#ffffff"
    },

    x: {
        color: "#ffffff",
        marginRight: 5,
    },

    plus: {
        color: "#ffffff",
        marginRight: 5,
    }
});

export default styles;