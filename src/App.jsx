import React from "react";
import { View, Text, StyleSheet } from "react-native";

// import Primeiro from "./components/Primeiro";
// import Segundo from "./components/Segundo";
// import Terceiro from "./components/Terceiro";
// import PassaValores from "./components/PassaValores";
import NumeroAleatorio from "./components/NumeroAleatorio";

export default () =>(
    <View style={style.fundo}>
        <NumeroAleatorio min={1} max={60}/>
        <NumeroAleatorio min={1} max={60}/>
        <NumeroAleatorio min={1} max={60}/>
        <NumeroAleatorio min={1} max={60}/>
        <NumeroAleatorio min={1} max={60}/>
        <NumeroAleatorio min={1} max={60}/>
        {/* <Primeiro/>
        <PassaValores minimo={3} maximo={90}/>
        <Text style={style.txtG}>Tela principal</Text>
        <Segundo />
        <Terceiro /> */}

    
    </View>
)


const style = StyleSheet.create(
    {
        fundo:{
            backgroundColor: '#FFF',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20
        
        },
        txtG:{
            fontSize: 30,
            fontStyle: 'italic',
        },
    }
)