import React from 'react';
import { View, Text } from 'react-native'
import styles from './styles';
import { PieChart } from 'react-native-chart-kit'
import COLORS from '../../../themes/colors'

// CATEGORIAS :
// CASA = 0
// TRANSPORTE = 1
// ALIMENTAÇÃO = 2
// ROUPAS = 3
// EDUCAÇÃO = 4
// ENTRETENIMENTO = 5
// SERVIÇOS = 6
// VÁRIOS = 7

const Grafico = props => {
    const data = [
        {
            name: "Casa",
            valor: 0,
            color: "#00487cff",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },

        {
            name: "Transporte",
            valor: 0,
            color: "#2274A5",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },

        {
            name: "Refeição",
            valor: 0,
            color: "#0496ffff",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },

        {
            name: "Roupas",
            valor: 0,
            color: "#027bceff",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },

        {
            name: "Educação",
            valor: 0,
            color: "#57B8FF",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },

        {
            name: "Lazer",
            valor: 0,
            color: COLORS.BLUE_1,
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },

        {
            name: "Serviços",
            valor: 0,
            color: "#3590f3ff",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },

        {
            name: "Outros",
            valor: 0,
            color: "#69ddffff",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },
    ]   

    const setData = () => {
        props.dataGastos.forEach(item => data[parseInt(item.categoria)].valor += item.preco);
    }

    return(
        <View style={styles.view_user}>
            <View style={styles.header_categoria}>
                <Text style={styles.titulo_categorias}>Relatório da semana</Text>                
            </View>

            {setData()}

            <View>
                <PieChart
                    data={data}
                    width = {300}
                    height={220}
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    accessor="valor"
                    backgroundColor="transparent"
                    paddingLeft="30"
                    absolute
                />
            </View>
        </View>
    )
}

export default Grafico