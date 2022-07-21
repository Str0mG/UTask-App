import React, {useState} from "react";
import { View, Text, StyleSheet, Button,ScrollView, Modal,TextInput } from "react-native";
import {MaterialIcons,Entypo,FontAwesome5,AntDesign} from '@expo/vector-icons';
import { Formik } from 'formik';
import Task from '../Task/Task';

const Fazer = ({}) => {
    const [modal, setModal] = useState(false);

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
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
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
                            status: 'fazer',
                        }}
                        onSubmit={values => {
                            console.log(values);}}>
                            {({ handleChange, handleBlur, handleSubmit, values }) => (
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

                                            title="Cancelar"
                                            color="#3867D6"
                                            accessibilityLabel="Learn more about this purple button"
                                            onPress={()=> setModal(false)}
                                        />
                                        <Button
                                            title="Adicionar"
                                            color="#3867D6"
                                            accessibilityLabel="Learn more about this purple button"
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
        marginBottom:10,
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