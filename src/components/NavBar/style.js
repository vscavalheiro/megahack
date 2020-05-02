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
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#ffffff',
        borderTopColor: COLORS.BLUE_4,
        borderTopWidth: 3
    },

    bordItem: {
        flex: 1,
        borderColor: COLORS.BLUE_6,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 2.5,
    },

    navItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    iconHouse: {
        flex: 1,
        width:30,
        height:30,
        resizeMode:'contain',
        backgroundColor: '#ffffff'
    },

    iconMoney: {
        flex: 1,
        width:30,
        height:30,
        resizeMode:'contain',
        backgroundColor: '#ffffff'
    },

    iconPaper: {
        flex: 1,
        width:30,
        height:30,
        resizeMode:'contain',
        backgroundColor: '#ffffff'
    },

    iconRobot: {
        flex: 1,
        width:35,
        height:35,
        resizeMode:'contain',
        backgroundColor: '#ffffff'
    },
    
    image: {
        flex: 1,
        width: 22,
        backgroundColor: '#ffffff'
    }
});

export default styles;