import React, {useState} from "react";
import { View, Text, StyleSheet, Button,ScrollView, Modal,TextInput,TouchableHighlight } from "react-native";
import { Formik } from 'formik';
import Task from '../Task/TaskFazer';
import * as yup from 'yup'
import {useSelector, useDispatch} from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import {actions} from '../../actions/task.actions';

const Fazer = ({}) => {
    const task = useSelector((state:any) => state.taskReducers.tasks.filter((task:any) => task.raia === 0));
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();
    
    const esquema = yup.object().shape({
        title: yup.string().required('O titulo é obrigatório').min(3, 'O titulo deve ter no mínimo 3 caracteres').max(25, 'O titulo deve ter no máximo 25 caracteres'),
    })
    
    return (
        <View style={styles.container}>
            <View style={styles.raia}>
                <ScrollView 
                    centerContent={true}
                    contentContainerStyle={{justifyContent: 'space-between',alignItems: 'center',}}
                    fadingEdgeLength={20}>
                    
                    {task.map((task:any) => (<Task key={task.id} task={task} />))}

                </ScrollView>
            </View>

            <Button
                onPress={()=> setModal(true)}
                title="Adicionar"
                color="#3867D6"
                accessibilityLabel="Learn more about this purple button"/>
            <Modal          
                visible={modal}
                transparent={true}
                animationType="slide">
                
                
                <View style={styles.modal}>
                
                <AntDesign name="closecircleo" size={22} color="red" onPress={()=> setModal(false)}  style={{position:'absolute', right:0,top:0,paddingTop:16, paddingRight:9}} />
                
                
                    <Formik
                        initialValues={{title: '',description: '',id: Date.now(),raia: 0}}
                        validationSchema={esquema}
                        onSubmit={(values) => {
                            dispatch(actions.adicionar(values));
                            setModal(false)
                        }}>
                            {({ handleChange, handleBlur, handleSubmit, values,errors, isValid }) => (
                                <View >
                                    <Text style={{color:'#226ED8', fontSize:20,alignSelf:'center',textDecorationLine: 'underline'}}>Nova Task</Text>
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
                                            title="Adicionar"
                                            color="#3867D6"
                                            accessibilityLabel="Learn more about this purple button"
                                            onPress={()=> {
                                                handleSubmit();
                                                }}/>
                                        
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
        width:300,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
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
