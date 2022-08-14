import React from "react";
import { StyleSheet, Text, View} from 'react-native';
import {MaterialIcons,Entypo} from '@expo/vector-icons';
//@ts-ignore
import Modal from 'react-native-modalbox';
import { useTheme } from "styled-components/native";
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MyModal = (props:any) => {
    const {colors} = useTheme()

    return (
        <Modal          
        isOpen={props.visible}
        onClosed={()=> props.toggleModal(false)}
        style={[styles.modal,{backgroundColor:colors.backgroundModalSE,borderColor:colors.borderModal}]}
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
        <MaterialIcons name="close" size={22} color="#AF2809" onPress={() => {props.toggleModal(false)}} style={{position:'absolute', right:0,top:0,paddingTop:5, paddingRight:9}}  />
        <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-between', paddingBottom:20}}>
            <Text style={{color:colors.text}}>Alguma_Foto_Legal.png</Text>
            <Text style={{color:colors.text}}>(This is an easter egg )</Text>
            
        </View>
        <Text style={{color:colors.text}}>© Processo de Trainee Unect Jr. 2022.1</Text>
        <View style={{flexDirection:'row'}}>
            <Text style={{color:colors.text}}>Feito com </Text>
            <Entypo name="heart" size={19} color="#FFAFAF" />
            <Text style={{color:colors.text}}> por Gabriel Trombini</Text>
        </View>
        </Modal>
    );
}

export default MyModal;


const styles = StyleSheet.create({
    modal:{
        width:'90%',
        height:hp('16%'),
        alignItems:'center',
        top: hp('30%'),
        position:'relative',
        padding:10,
        borderRadius:10,
    }
});