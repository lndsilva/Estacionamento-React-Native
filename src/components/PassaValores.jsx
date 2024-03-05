import React from "react";
import { Text, View } from "react-native";
import Estilo from './estilo'

export default props =>{
    console.warn(props)
    return (
        <Text style={Estilo.fontG}>O valor de {props.maximo} é maior que o valor de {props.minimo}</Text>
    )
}