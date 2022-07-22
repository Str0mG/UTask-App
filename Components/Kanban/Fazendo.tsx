import { View, Text, StyleSheet, Button,ScrollView } from "react-native";
import React, {useState, useEffect} from "react";
import {MaterialIcons,Entypo,FontAwesome5,AntDesign} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import Task from '../Task/TaskFazendo';

const Fazendo = () => {
    const [taskFznd, setTaskFznd] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            getData();
        }, [])
      );

      const next = async (value:Object) => {
        try {
            const value2 = await AsyncStorage.getItem('@fazer')
            
            if(value2 !== null) {
                const task = JSON.parse(value2)
                
                const index = task.map(function(e) { return e.title; }).indexOf(value.title)
                task.splice(index, 1)
                const jsonValue = JSON.stringify(task)
                await AsyncStorage.setItem('@fazer', jsonValue)
                getData()
            }
        }
        catch(e) {
            // error reading value
            console.log(e)
        }
        try {
            const tasksFazer = await AsyncStorage.getItem('@fazendo')
            
            if(tasksFazer !== null) {
                const task = JSON.parse(tasksFazer)
                task.push(value)
                const jsonValue = JSON.stringify(task)
                await AsyncStorage.setItem('@fazendo', jsonValue)
                
            }
            else if(tasksFazer === null) {
                try {
                    
                    const jsonValue = JSON.stringify([value])
                    await AsyncStorage.setItem('@fazendo', jsonValue)
                    
                  } catch (e) {
                    // saving error
                  }
            }
          } catch(e) {
            // error reading value
            console.log(e)
        }
      }
    
      const before = async (value:Object) => {
        try {
            const value2 = await AsyncStorage.getItem('@fazendo')
            
            if(value2 !== null) {
                const task = JSON.parse(value2)
                
                const index = task.map(function(e) { return e.title; }).indexOf(value.title)
                task.splice(index, 1)
                const jsonValue = JSON.stringify(task)
                await AsyncStorage.setItem('@fazendo', jsonValue)
                getData()
            }
        }
        catch(e) {
            // error reading value
            console.log(e)
        }
        try {
            const tasksFazer = await AsyncStorage.getItem('@fazer')
            
            if(tasksFazer !== null) {
                const task = JSON.parse(tasksFazer)
                task.push(value)
                const jsonValue = JSON.stringify(task)
                await AsyncStorage.setItem('@fazer', jsonValue)
                
            }
            else if(tasksFazer === null) {
                try {
                    
                    const jsonValue = JSON.stringify([value])
                    await AsyncStorage.setItem('@fazer', jsonValue)
                    
                  } catch (e) {
                    // saving error
                  }
            }
          } catch(e) {
            // error reading value
            console.log(e)
        }
      }


      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@fazendo')
          
          if(value !== null) setTaskFznd(JSON.parse(value))
        } catch(e) {
          // error reading value
          
        }
      }

      const removeData = async (value) => {
        try {
            const value2 = await AsyncStorage.getItem('@fazendo')
            
            if(value2 !== null) {
                const task = JSON.parse(value2)
                
                const index = task.map(function(e) { return e.title; }).indexOf(value.title)
                task.splice(index, 1)
                const jsonValue = JSON.stringify(task)
                await AsyncStorage.setItem('@fazendo', jsonValue)
                getData()
            }
        }
        catch(e) {
            // error reading value
            console.log(e)
        }
    }

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
                    {taskFznd.map((task, index) => {
                        return (
                            <Task key={index} tassk={task} removeData={() => removeData(task)} before={() => before(task)}/>
                        )
                    })}
                    
                    
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