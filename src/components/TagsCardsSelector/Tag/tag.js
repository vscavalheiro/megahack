import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import styles from "./style.js";

export default Tag = (props) => {

    let status = props.isActive

    let style_container = {}
    props.isActive? style_container=styles.container_active : style_container=styles.container_disable

    return(
        <TouchableOpacity style={style_container} onPress={props.f_handleSetTags.bind((this), {tag:props.tag, isActive:status})}>
            {props.isActive === true ?
            <Text style={styles.x}>X</Text>
            :
            null
            }
            <Text style={styles.text}>{props.tag}</Text>
        </TouchableOpacity>
    );
}