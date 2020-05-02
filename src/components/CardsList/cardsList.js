import React, {Fragment} from 'react';
import { Text, View, ScrollView } from 'react-native'
import styles from './styles'
import DataCards from "../../data/cards.json"
import Card from '../SingleCard/singleCard'


const CardsList = () => {
    return (
        <Fragment >
            <ScrollView>
                <View style = {styles.main}>
                    {DataCards.map((cardDetail, index) => {
                        return <Card cardInfo={cardDetail}/>
                    })}
                </View>
                <View style={styles.bottom}></View>
            </ScrollView>
        </Fragment>
    )

}


export default CardsList;