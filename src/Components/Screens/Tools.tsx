import React from "react";
import { View, StyleSheet} from "react-native";

import Api from "../Frase/Api"
import Calendario from "../Frase/Celendar"


const Frase = () => {
    
    return (
        <View style={styles.container}>
            <View style={{marginTop:80}}>
                <Api/>
            </View>
            
            <View style={{marginTop:40}}>
                <Calendario/>
            </View>
            
        </View>
    );
}

export default Frase;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#141414",
        flexDirection: 'column',
    },
});