import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Button,ScrollView, Modal,TextInput } from "react-native";
import {MaterialIcons,Entypo,FontAwesome5,AntDesign} from '@expo/vector-icons';
import { Formik } from 'formik';
import Task from '../Task/TaskFazer';
import * as yup from 'yup'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Fazer = ({}) => {
    const [modal, setModal] = useState(false);
    const [tasks, setTasks] = useState([]);

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

    const storeData = async (value:Object) => {
        try {
            const tasksFazer = await AsyncStorage.getItem('@fazer')
            if(tasksFazer !== null) {
                const task = JSON.parse(tasksFazer)
                task.push(value)
                const jsonValue = JSON.stringify(task)
                await AsyncStorage.setItem('@fazer', jsonValue)
                getData()
            }
            else if(tasksFazer === null) {
                try {
                    
                    const jsonValue = JSON.stringify([value])
                    await AsyncStorage.setItem('@fazer', jsonValue)
                    getData()
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
          const value = await AsyncStorage.getItem('@fazer')
          
          if(value !== null) setTasks(JSON.parse(value))
        } catch(e) {
          // error reading value
          
        }
      }
      
      const removeData = async (value) => {
        
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
    }


    const esquema = yup.object().shape({
        title: yup.string().required('O titulo é obrigatório').min(3, 'O titulo deve ter no mínimo 3 caracteres').max(20, 'O titulo deve ter no máximo 25 caracteres'),
    })
    
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
                    {tasks.map((task, index) => {
                        return (
                            <Task key={index} tassk={task} removeData={() => removeData(task)} next={() => next(task)}/>
                        )
                    })}

                    
                </ScrollView>
            </View>
            <Button
                onPress={()=> setModal(true)}
                title="Adicionar"
                color="#3867D6"
                accessibilityLabel="Learn more about this purple button"
                />
            <Modal          
                visible={modal}
                transparent={true}
                animationType="slide"
            >  
                
                <View style={styles.modal}>
                    
                    <Formik
                        initialValues={{
                            title: '',
                            description: '',
                            id: Date.now(),
                        }}
                        validationSchema={esquema}
                        onSubmit={(values, actions) => {
                            storeData(values)
                            setModal(false)
                            actions.resetForm()
                        }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values,errors, isValid }) => (
                                <View >
                                    <Text style={{color:'#226ED8', fontSize:20,alignSelf:'center'}}>Nova Task</Text>
                                    <Text style={{color:'#fff', fontSize:11}}>Título</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('title')}
                                        onBlur={handleBlur('title')}
                                        value={values.title}
                                        placeholderTextColor='#fff'
                                        selectionColor='#fff'
                                        
                                    />
                                    {errors.title && <Text style={{color:'red', fontSize:11}}>{errors.title}</Text>}
                                    <Text style={{color:'#fff', fontSize:11}}>Descrição</Text>
                                    <TextInput
                                        multiline={true}
                                        style={styles.input2}
                                        onChangeText={handleChange('description')}
                                        onBlur={handleBlur('description')}
                                        value={values.description}
                                        selectionColor='#fff'
                                    
                                    />
                                    <View style={styles.buttons}>
                                        <Button

                                            title="Listar"
                                            color="#3867D6"
                                            accessibilityLabel="Learn more about this purple button"
                                            onPress={() => {
                                                setModal(false)
                                                getData()
                                            }}
                                        />
                                        <Button
                                            title="Adicionar"
                                            color="#3867D6"
                                            accessibilityLabel="Learn more about this purple button"
                                            onPress={()=> {
                                                handleSubmit()
                                            }}
                                        />
                                        <Button
                                            title="Remover"
                                            color="#3867D6"
                                            accessibilityLabel="Learn more about this purple button"
                                            onPress={()=> {
                                                removeData(values);
                                            }}
                                            
                                        />
                                    </View>
                                </View>
                            )}
                    </Formik>
                </View>
            </Modal>
        </View>
    );
}

export default Fazer;

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
    },
    modal:{
        backgroundColor: '#3D3D3D',
        alignItems:'center',
        alignSelf:'center',
        top: '20%',
        position:'relative',
        padding:10,
        borderRadius:10,
        
        
        
    },
    form:{
        width:300,
        padding:10,
        borderRadius:10,
        backgroundColor: '#3D3D3D',
        alignItems:'center',
        alignSelf:'center',
        top: '20%',
        position:'relative',
    },
    input:{
        marginTop:5,
        padding:10,
        marginBottom:1,
        borderRadius:10,
        width:300,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#333333',
        color:'#fff',
    },
    input2:{
        marginTop:5,
        padding:10,
        marginBottom:10,
        borderRadius:10,
        width:300,
        height:100,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#333333',
        textAlignVertical: 'top',
        color:'#fff',
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:300,
        alignSelf:'center',
        alignItems:'center',
        marginTop:10,
    },
    button:{
        borderRadius:10,
        width:100,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
    }
});
