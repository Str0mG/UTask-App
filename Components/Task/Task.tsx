import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//props:
const Task = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{color:'#000'}}> Correr </Text>
                <Text style={{color:'#000'}}> ... </Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{color:'#000'}}> ler descrição v </Text>
                <Text style={{color:'#000'}}> 0 </Text>
            </View>
        </View> 
    );
}

export default Task;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width:270,
        height:90,
        borderRadius: 10,
        marginBottom:7,
        marginTop:7,
    }
});