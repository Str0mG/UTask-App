import React, {useState} from "react";
import { View, Text, StyleSheet, Button,ScrollView, Modal,TextInput,TouchableWithoutFeedback } from "react-native";
import { Formik } from 'formik';
import Task from '../Task/TaskFazer';
import * as yup from 'yup'
import {useSelector, useDispatch} from 'react-redux';
import { AntDesign,Ionicons } from '@expo/vector-icons';
import {actions} from '../../actions/task.actions';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {useTheme} from 'styled-components/native';


const Fazer = ({}) => {
    const task = useSelector((state:any) => state.taskReducers.tasks.filter((task:any) => task.raia === 0));
    const [modal, setModal] = useState(false);
    const {colors} = useTheme()
    
    const dispatch = useDispatch();
    
    const esquema = yup.object().shape({
        title: yup.string().required('O titulo é obrigatório').min(3, 'O titulo deve ter no mínimo 3 caracteres').max(25, 'O titulo deve ter no máximo 25 caracteres'),
    })
    
    return (
        <View style={[styles.container,{backgroundColor: colors.backgroundScreen}]}>
            <View style={[styles.raia,{backgroundColor:colors.backgroundRaia}]}>
                <ScrollView 
                    centerContent={true}
                    fadingEdgeLength={20}>
                    {task.map((task:any) => (<Task key={task.id} task={task} />))}

                </ScrollView>
            </View>
            <TouchableWithoutFeedback onPress={()=> setModal(true)}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:"#226ED8", fontWeight:'normal', fontSize:18}}> Criar task </Text>
                    <Ionicons name="add-sharp" size={24} color="#226ED8" />
                </View>
            </TouchableWithoutFeedback>
            <Modal          
                visible={modal}
                transparent={true}
                animationType="slide">
                
                {/* borderColor:colors.headerContainer */}
                <View style={[styles.modal,{backgroundColor:colors.backgroundTask,borderColor:colors.borderModal}]}>
                
                <AntDesign name="closecircleo" size={22} color="#226ED8" onPress={()=> setModal(false)}  style={{position:'absolute', right:0,top:0,paddingTop:16, paddingRight:9}} />
                
                
                    <Formik
                        initialValues={{title: '',description: '',id: Date.now(),raia: 0}}
                        validationSchema={esquema}
                        onSubmit={(values) => {
                            dispatch(actions.adicionar(values));
                            setModal(false)
                        }}>
                            {({ handleChange, handleBlur, handleSubmit, values,errors, isValid }) => (
                                <View >
                                    <Text style={{color:'#226ED8', fontSize:20,alignSelf:'center',fontWeight:'bold',textDecorationLine: 'underline'}}>Nova Task</Text>
                                    <Text style={{color:colors.text, fontSize:11, marginTop:5}}>Título *</Text>
                                    <TextInput
                                        style={[styles.input,{backgroundColor:colors.input, color:colors.text}]}
                                        onChangeText={handleChange('title')}
                                        onBlur={handleBlur('title')}
                                        value={values.title}
                                        selectionColor={colors.text}
                                    />
                                    {errors.title && <Text style={{color:'red', fontSize:11}}>{errors.title}</Text>}
                                    <Text style={{color:colors.text, fontSize:11}}>Descrição</Text>
                                    <TextInput
                                        multiline={true}
                                        style={[styles.input,{backgroundColor:colors.input, color:colors.text,marginBottom:10,height:100,textAlignVertical: 'top',}]}
                                        onChangeText={handleChange('description')}
                                        onBlur={handleBlur('description')}
                                        value={values.description}
                                        selectionColor={colors.text}
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
    },
    raia:{
        marginTop:hp('7%'),
        marginBottom:hp('2%'),
        height: hp('50%'),
        width:wp('75%'),
        borderRadius:10,
        flexDirection: 'column',
        justifyContent:'center'
    },
    modal:{
        position:'relative',
        marginTop:hp('17%'),
        height: hp('35%'),
        borderColor:'#000',
        alignItems:'center',
        alignSelf:'center',
        padding:10,
        borderWidth:0.4,
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
