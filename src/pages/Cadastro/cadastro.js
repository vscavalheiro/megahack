import React, {Fragment, useState} from 'react';
import { Text, AsyncStorage, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'

import TagCardsSelector from '../../components/TagsCardsSelector/tagCardsSelector'
const Cadastro = (props) => {

    // Inicalizalççao das constantes para serem armazenadas no cadatro
    const [nome,setNome] = useState('');
    const [sobrenome,setSobrenome] = useState('');
    const [renda,setRenda] = useState('');
    const [economia,setEconomia] = useState('');

    // Inicialmete o usuário tem como tags habilitadas todas as tags
    const [activetags, setActiveTags] = useState([
        {tag:"Investimento", isActive:true},
        {tag:"Casa", isActive:true},
        {tag:"Economia", isActive:true},
        {tag:"Mercado", isActive:true},
        {tag:"Seu Negócio", isActive:true}
    ])

    // E nunhuma disabilitada
    const [disabletags, setDisableTags] = useState([

    ])

    // Função que passa uma tag de habilitada para desabilitada e vice versa
    const handleSetTags = (props) => {
        let tag = props;

        let newActiveTags  = []
        let newDisableTags = []

        console.log(props)

        if( props.isActive === true) {
            tag.isActive=false;
            newActiveTags = activetags.filter((item) => item.tag !== tag.tag);
            newDisableTags = disabletags.concat([tag]);
        }
        else {
            tag.isActive=true;
            newDisableTags = disabletags.filter((item) => item.tag !== tag.tag);
            newActiveTags = activetags.concat([tag]);
        }
        
        setActiveTags(newActiveTags)
        setDisableTags(newDisableTags)
        
    }


    let newDataCadastro = {
        nome:nome,
        sobrenome:sobrenome,
        renda:renda,
        economia:economia,
        tags:activetags.map((item)=> { return(item.tag)} )
    }
            
    

    return (
        <Fragment>
           <ScrollView style={{padding: 40}}>
                <Text style={styles.texto}>Nome :</Text>
                <TextInput style={styles.input} placeholder='Digite o seu nome' onChangeText={(input) => {setNome(input)}} value={nome}/>
                <Text style={styles.texto}>Sobrenome :</Text>
                <TextInput style={styles.input} placeholder='Digite o seu sobrenome' onChangeText={(input) => {setSobrenome(input)}} value={sobrenome}/>
                <Text style={styles.texto}>Renda média mensal :</Text>
                <TextInput style={styles.input} placeholder='Digite o sua renda mensal' onChangeText={(input) => {setRenda(input)}} value={renda}/>
                <Text style={styles.texto}>Quanto você deseja economizar por mês :</Text>
                <TextInput style={styles.input} placeholder='Digite uma quantia' onChangeText={(input) => {setEconomia(input)}} value={economia}/>
                <TagCardsSelector f_handleSetTags={handleSetTags} activetags={activetags} disabletags={disabletags}/>
                
           </ScrollView>
           <TouchableOpacity style={{alignSelf:"flex-end"}} onPress={() => {props.f_setSecaoApp(1), props.f_setDataCadastro(newDataCadastro)}}>
               <Text style={styles.next}>Next   ></Text>
           </TouchableOpacity>
        </Fragment>
    )

}


export default Cadastro;