import React from "react"
import {View,Text, StyleSheet} from 'react-native'
import Estilo from './estilo'


export default ()=>{
    return (
        <View style={estiloTerceiro.fundoTer}>
            <Text style={Estilo.fontG}>Terceiro componente!!!</Text>
        </View>
    )
}


const estiloTerceiro = StyleSheet.create(
    {
        fundoTer:{
            backgroundColor: '#9195F6',
            padding: 20,
            flexGrow: 1
        }
    }
)