import React from "react";
import { View, Text, StyleSheet, Button,TextInput,} from "react-native";
import {AntDesign} from '@expo/vector-icons';
//@ts-ignore
import Modal from 'react-native-modalbox';
import { useTheme } from "styled-components/native";
import { useDispatch } from "react-redux";
import { Formik } from 'formik';
import * as yup from 'yup'
import {actions} from '../../actions/task.actions';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ModalAdd = (props:any) => {
    const {colors} = useTheme()

    const dispatch = useDispatch()

    const esquema = yup.object().shape({
        title: yup.string().required('O titulo é obrigatório').min(3, 'O titulo deve ter no mínimo 3 caracteres').max(25, 'O titulo deve ter no máximo 25 caracteres'),
    })


    return (
        <Modal
                isOpen={props.isOpen}
                onClosed={()=> props.toggleModal(false)}
                style={[styles.modal,{backgroundColor:colors.backgroundTask,borderColor:colors.borderModal}]}
                position={'top'}
                backdrop={true}
                animationDuration={200}
                backdropOpacity={0.6}
                swipeToClose={false}
                backdropColor={colors.backgroundScreen}
                entry="down"
                entryAnimation="slideup"
                coverScreen={true}
                backButtonClose={true}
                
            >
                <AntDesign name="closecircleo" size={22} color="#226ED8" onPress={()=> props.toggleModal(false)}  style={{position:'absolute', right:0,top:0,paddingTop:16, paddingRight:9}} />
                <Formik
                        initialValues={{title: '',description: '',id: Date.now(),raia: 0}}
                        validationSchema={esquema}
                        onSubmit={(values) => {
                            dispatch(actions.adicionar(values));
                            props.toggleModal(false)
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
                                        autoFocus={true}
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
                    
            </Modal> 
    );
}

export default ModalAdd;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    modal:{
        position:'relative',
        marginTop:hp('17%'),
        width:'80%',
        height: hp('37%'),
        borderColor:'#000',
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
