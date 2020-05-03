import React, { Fragment, useState } from 'react';
import { Text, View } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import styles from './styles';

const AvaliacaoTarefa = (props) => {
    return(
        <Fragment>
            <Text style = {styles.nota}>Nota: </Text>
            <View style = {styles.slider}> 
                <Text style = {styles.texto}>0</Text>
                    <View>
                        <MultiSlider
                            selectedStyle = {{
                                backgroundColor: 'white',
                            }}
                            unselectedStyle = {{
                                backgroundColor: 'white',
                            }}
                            markerStyle = {{
                                backgroundColor: "black",
                                width: 15,
                                height: 15
                            }}
                            values = {[5]}
                            min = {0}
                            max = {10}
                            step = {1}
                            sliderLength = {props.sliderLength - 80}        
                            onValuesChange={(value) => props.f_setNota(value.pop())}
                        />
                        
                    </View>
                <Text style = {styles.texto}>10</Text>
            </View>
        </Fragment>        
        );
}
export default AvaliacaoTarefa