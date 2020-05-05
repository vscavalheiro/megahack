import React from 'react';
import { Image }  from 'react-native';

const RoboIcon = (props) => {

    const size =100

    switch (props.num) {
        case 0: 
            return(
                <Image source={require('../../assets/robos/robo' + 0 + '.png')} style={{width: size, height: size}}  />
            )

        case 1: 
            return(
                <Image source={require('../../assets/robos/robo' + 1 + '.png')} style={{width: size, height: size}}  />
            )

        case 2: 
            return(
                <Image source={require('../../assets/robos/robo' + 2 + '.png')} style={{width: size, height: size}}  />
            )

        case 3: 
            return(
                <Image source={require('../../assets/robos/robo' + 3 + '.png')} style={{width: size, height: size}}  />
            )

        case 4: 
            return(
                <Image source={require('../../assets/robos/robo' + 4 + '.png')} style={{width: size, height: size}}  />
            )

        case 5: 
            return(
                <Image source={require('../../assets/robos/robo' + 5 + '.png')} style={{width: size, height: size}}  />
            )
        
        default:
            return(
                <Image source={require('../../assets/robos/robo' + 0 + '.png')} style={{width: size, height: size}}  />
            )
    }
}

export default RoboIcon