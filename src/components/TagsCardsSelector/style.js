import { StyleSheet } from 'react-native'
import COLORS from "../../themes/colors.js";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 10,
    },

    text: {
        marginTop: 10,
        color: COLORS.BLUE_3,
        marginRight: 5,
    }
});

export default styles;