import React, {Fragment } from 'react';
import { View, Text } from 'react-native';
import styles from "./style.js";

import Tag from './Tag/tag'

export default TagCardSelector = (props) => {

    return(
        <Fragment>
            <View style={styles.row}>
                <Text style={styles.text}>Tags:</Text>
                {props.activetags.map((item) => {
                    return(
                        <Tag tag={item.tag} isActive={item.isActive} f_handleSetTags={props.f_handleSetTags} />
                    );}
                )}
            </View>
            <View style={styles.row}>
                {props.disabletags.map((item) => {
                    return(
                        <Tag tag={item.tag} isActive={item.isActive} f_handleSetTags={props.f_handleSetTags} />
                    );}
                )}
            </View>
        </Fragment>
    );
}