import React from "react";
import { View, Text, StyleSheet, Button , TouchableHighlight} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//props:
const Task = (props) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between', position:'relative'}}>
                <Text style={{color:'#000'}}> {props.tassk.title} </Text>
                <Text style={{color:'#000'}}>                                     </Text>
                <MaterialIcons name="close" size={22} color="#AF2809" onPress={props.removeData} style={{position:'absolute', right:0,top:0}} />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{color:'#000'}}> {props.tassk.description} </Text>
                <TouchableHighlight onPress={props.next}>
                <AntDesign name="rightcircleo" size={21} color="black" style={{position:'absolute', right:0,top:0}}  />
                </TouchableHighlight>
                
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