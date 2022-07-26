import React, {useState} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, Appearance, Modal} from 'react-native';
import {MaterialIcons,Entypo,FontAwesome5,AntDesign} from '@expo/vector-icons';


const MyModal = (props:any) => {
    return (
        <Modal          
            visible={props.visible}
            transparent={true}
            animationType="slide"
        >
            <View style={styles.modal}>
                <View style={{flexDirection:'row',  width:'100%'}}>
                    <Text style={{color:'#fff',height:60}}>Foto</Text>
                    <MaterialIcons name="close" size={22} color="#AF2809" onPress={() => {props.toggleModal()}} style={{position:'absolute',alignSelf:'flex-end', justifyContent:'flex-end',left:115, top:0}}  />
                </View>
                <Text style={{color:'#fff'}}>© Processo de Trainee Unect Jr. 2022.1</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#fff'}}>Feito com </Text>
                    <Entypo name="heart" size={19} color="#FFAFAF" />
                    <Text style={{color:'#fff'}}> por Gabriel Trombini</Text>
                </View>
                <Text style={{color:'#fff'}}> Version 1.0.0-0</Text>
            </View>
        </Modal>
    );
}

export default MyModal;


const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#000',
        textShadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 3,   
    },
    modal:{
        backgroundColor: '#000',
        alignItems:'center',
        alignSelf:'center',
        top: '20%',
        position:'relative',
        padding:10,
        borderRadius:10,
        
        
    }
});