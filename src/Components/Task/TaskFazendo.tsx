import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import {useDispatch} from 'react-redux';
import {actions} from '../../actions/task.actions';


//props:
const Task = (task:any) => {
    const dispatch = useDispatch();
    const handleDelete = ( ) => {
        dispatch(actions.remover(task.task));
    }

    const handleNext = ( ) => {
        dispatch(actions.next(task.task));
    }

    const handlePrev = ( ) => {
        dispatch(actions.prev(task.task));
    }

    return (
        <View style={styles.container}>
            
            <MaterialIcons name="close" size={22} color="#AF2809" onPress={handleDelete}  style={{position:'absolute', right:0,top:0}}  />
            <Text style={{color:'#000'}}>  {task.task.title} </Text>
            <Text style={{color:'#000'}}>  {task.task.description} </Text>
            <AntDesign name="leftcircleo" size={21} color="black"  onPress={handlePrev} style={{position:'absolute', left:0,bottom:0}}  />
            <AntDesign name="rightcircleo" size={21} color="black" onPress={handleNext}  style={{position:'absolute', right:0,bottom:0}} />
            
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