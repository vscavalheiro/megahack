import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        color: "#ffffff",
        justifyContent: "center",
        paddingLeft: 10
    },

    viewTexto: {
        marginTop: -10,
        flex: 5,
        justifyContent: "center"
    },

    texto: {
        color: "#ffffff"
    },

    viewPicker: {
        flex: 9,
    },

    pickerCategoria: {
        marginTop: -10,
        borderWidth: 1,
        color: "#ffffff"
    }
});



export default styles;