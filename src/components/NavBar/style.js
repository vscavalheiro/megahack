import { StyleSheet } from 'react-native'
import COLORS from "../../themes/colors.js";

const styles = StyleSheet.create({
    navBar: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: COLORS.BLUE_1
    },

    bordItem: {
        flex: 1,
        borderColor: COLORS.BLUE_6,
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 2.5,
        overflow: "hidden"
    },

    navItem: {
        flex: 1,
    },

    viewWithText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.BLUE_1
    }
});

export default styles;