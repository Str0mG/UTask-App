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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ModalNote = (props:any) => {
    const {colors} = useTheme()

    const dispatch = useDispatch()

    
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
                        initialValues={{description: props.desc,id: props.id,raia: 5}}
                        
                        onSubmit={(values) => {
                            dispatch(actions.edit(values))
                            props.toggleModal(false)
                        }}>
                            {({ handleChange, handleBlur, handleSubmit, values,errors, isValid }) => (
                                <View >
                                    <Text style={{color:'#226ED8', fontSize:20,alignSelf:'center',fontWeight:'bold',textDecorationLine: 'underline'}}>Edit Note</Text>
                                    
                                    <Text style={{color:colors.text, fontSize:12, paddingTop:20}}>Descrição:2</Text>
                                    <TextInput
                                        
                                        multiline={true}
                                        style={[styles.input,{backgroundColor:colors.input, color:colors.text,marginBottom:7,height:180,textAlignVertical: 'top',}]}
                                        onChangeText={handleChange('description')}
                                        autoFocus={true}
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

export default ModalNote;


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
