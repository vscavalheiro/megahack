import React from 'react';
import { Image }  from 'react-native';

const RoboImagem = (props) => {

    switch (props.num) {
        case 0: 
            return(
                <Image source={require('../../assets/robos/robo' + 0 + '.png')} style={{width: 200, height: 200}}  />
            )

        case 1: 
            return(
                <Image source={require('../../assets/robos/robo' + 1 + '.png')} style={{width: 200, height: 200}}  />
            )

        case 2: 
            return(
                <Image source={require('../../assets/robos/robo' + 2 + '.png')} style={{width: 200, height: 200}}  />
            )

        case 3: 
            return(
                <Image source={require('../../assets/robos/robo' + 3 + '.png')} style={{width: 200, height: 200}}  />
            )

        case 4: 
            return(
                <Image source={require('../../assets/robos/robo' + 4 + '.png')} style={{width: 200, height: 200}}  />
            )

        case 5: 
            return(
                <Image source={require('../../assets/robos/robo' + 5 + '.png')} style={{width: 200, height: 200}}  />
            )
        
        default:
            return(
                <Image source={require('../../assets/robos/robo' + 0 + '.png')} style={{width: 200, height: 200}}  />
            )
    }
}

export default RoboImagem