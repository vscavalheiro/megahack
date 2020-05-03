import { AsyncStorage } from 'react-native'

const getDataCadastro = () => {

    console.log("*** Getting data...")
    AsyncStorage.getItem('dataCadastro')
    .then((value)=>{
        const user = JSON.parse(value);
        // Caso não encontre data
        if (user === null){
        console.log("*** Data is empty")
        return null
        }
        // Caso encontre
        else {
        console.log("***Data 'dataCadastro' obtained !!")}
        return(user)
        }
    )
    .catch((error)=>{
    console.log(error);
    })
}

export default getDataCadastro