import React, {Fragment} from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';
import ChatBot from 'react-native-chatbot';
import COLORS from '../../themes/colors.js'

import RoboIcon from '../../components/RoboImagem/roboIcon'



const Chat = (props) => {

  console.log(props)

  const intro = 'Olá ' + props.dataCadastro.nome + ', me chamo ' + props.dataRobo.roboName
  
  const steps = [
    {
      id: '1',
      message: intro,
      trigger: '2',
    },
    {
        id: '2',
        component: <RoboIcon num={props.dataRobo.icon}/>,
        asMessage: true,
        trigger: 'test'
      },
      {
        id: 'test',
        message: 'O que você quer saber hoje?',
        trigger: '3'
      },

    {
      id: '3',
      options: [
        { value: 1, label: 'Quanto eu gastei..', trigger: 'qg' },
        { value: 2, label: 'Quanto eu poupei..', trigger: 'qp' },
        { value: 3, label: 'Sou um comprador compulsivo?', trigger: 'comprador' },
      ],
    },
    {
      id: 'qg',
      options: [
          { value:1, label: 'essa semana?', trigger: 'semana' },
          { value:2, label: 'esse mês?', trigger: 'mes' }
      ]
    },
    {
      id: 'qp',
      options: [
          { value:1, label: 'na última semana em relação à anterior?', trigger: 'poupous' },
          { value:2, label: 'ontem em relação ao mesmo dia da última semana?', trigger:'poupoud'}
      ]
    },
    {
      id: 'semana',
      message: 'Essa semana tu gasto 30 pila.',
      trigger: '3',
    },
    {
      id: 'mes',
      message: 'Esse mês tu gasto 330 pila.',
      trigger: '3',
    },
    {
       id: 'poupous',
       message: 'Essa semana tu nao poupou nada meu.',
       trigger: '3',
    },
    {
       id: 'poupoud',
       message: 'Ontem tu poupou 10 pila a mais que no mesmo dia da última semana.',
       trigger: '3',
    },
    {
        id: 'comprador',
        message: 'Sim',
        end: true,
     },
  ];

  return (
      <Fragment>
          <View>
              <View style={styles.cabecalho}>
                  <Text style={styles.titulo_cabecalho}>Chat</Text>
              </View>
              <View>
                  <ChatBot 
                      
                      // Conversação do Bot //
                      steps={steps}
                      
                      // Cores //
                      botBubbleColor = {COLORS.BLUE_4}
                      optionBubbleColor = {COLORS.BLUE_3}
                      footerStyle = {{opacity:0}}
                      contentStyle = {{marginBottom:168, marginTop:0}}
                  />
              </View>
          </View>
      </Fragment>
  )

}


export default Chat;