import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from "./style.js";

export default NavBar = (props) => {
    const HOME_PAGE = 0;
    const MONEY_PAGE = 1;
    const PAPER_PAGE = 2;
    const ROBOT_PAGE = 3;

    return(
        <View style = {styles.navBar}>
            <View style = {styles.bordItem}>
                <TouchableOpacity style = {styles.navItem} onPress={props.f_setSecaoMenu.bind(this, HOME_PAGE)} activeOpacity={1} >
                    {props.currentSecao===HOME_PAGE?
                    <Image style = {styles.iconHouse} source = {require("../../assets/icons_navbar/house_blue.png")} />
                    :
                    <Image style = {styles.iconHouse} source = {require("../../assets/icons_navbar/house_grey.png")} />
                    }
                </TouchableOpacity>
            </View>

            <View style = {styles.bordItem}>
                <TouchableOpacity style = {styles.navItem} onPress={props.f_setSecaoMenu.bind(this, MONEY_PAGE)} activeOpacity={1}>
                    {props.currentSecao===MONEY_PAGE?
                    <Image style = {styles.iconMoney} source = {require("../../assets/icons_navbar/money_blue.png")} />
                    :
                    <Image style = {styles.iconMoney} source = {require("../../assets/icons_navbar/money_grey.png")} />
                    }
                </TouchableOpacity>
            </View>

            <View style = {styles.bordItem}>
                <TouchableOpacity style = {styles.navItem} onPress={props.f_setSecaoMenu.bind(this, PAPER_PAGE)} activeOpacity={1}>
                    {props.currentSecao===PAPER_PAGE?
                    <Image style = {styles.iconPaper} source = {require("../../assets/icons_navbar/paper_blue.png")} />
                    :
                    <Image style = {styles.iconPaper} source = {require("../../assets/icons_navbar/paper_grey.png")} />
                    }
                </TouchableOpacity>
            </View>

            <View style = {styles.bordItem}>
                <TouchableOpacity style = {styles.navItem} onPress={props.f_setSecaoMenu.bind(this, ROBOT_PAGE)} activeOpacity={1}>
                    {props.currentSecao===ROBOT_PAGE?
                    <Image style = {styles.iconRobot} source = {require("../../assets/icons_navbar/robo_blue.png")} />
                    :
                    <Image style = {styles.iconRobot} source = {require("../../assets/icons_navbar/robo_grey.png")} />
                    }
                </TouchableOpacity>
            </View>
        </View>
    );
}