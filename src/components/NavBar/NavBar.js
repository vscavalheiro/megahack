import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import styles from "./style.js";

export default NavBar = () => {

    return(
        <View style = {styles.navBar}>
            <View style = {styles.bordItem}>
                <TouchableOpacity style = {styles.navItem}>
                    <View style = {styles.viewWithText}>
                        <Text>
                            GERAL
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style = {styles.bordItem}>
                <TouchableOpacity style = {styles.navItem}>
                    <View style = {styles.viewWithText}>
                        <Text>
                            GASTOS
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style = {styles.bordItem}>
                <TouchableOpacity style = {styles.navItem}>
                    <View style = {styles.viewWithText}>
                        <Text>
                            CHAT
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style = {styles.bordItem}>
                <TouchableOpacity style = {styles.navItem}>
                    <View style = {styles.viewWithText}>
                        <Text>
                            CARDS
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}