import { View, StyleSheet,ScrollView } from "react-native";
import React from "react";
import {useSelector} from 'react-redux';

import Task from '../Task/TaskFazendo';

const Fazendo = ({}) => {
    const task = useSelector((state:any) => state.taskReducers.tasks.filter((task:any) => task.raia === 1));
  
    return (
        <View style={styles.container}>
            <View style={styles.raia}>
                <ScrollView
                    centerContent={true}
                    contentContainerStyle={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        
                    }}
                    fadingEdgeLength={20}
                    >
                    {task.map((task:any) => (
                        <Task key={task.id} task={task} />
                    ))}
                </ScrollView>
            </View>
            
        </View>
    );
}

export default Fazendo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#141414"
    },
    raia:{
        marginTop:80,
        backgroundColor: "#333333",
        width:300,
        borderRadius:10,
        marginBottom:20,
        height: 470,
    }
});