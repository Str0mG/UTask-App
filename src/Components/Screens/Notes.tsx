import React, { useState } from "react";
import { View, StyleSheet, Text ,TouchableWithoutFeedback,ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useTheme } from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import ModalNote from "../Modal/ModalNote";
import Note from "../Task/Note";
import {useSelector} from 'react-redux';

const Notes = () => {
    const task = useSelector((state:any) => state.taskReducers.tasks.filter((task:any) => task.raia === 5));
    const {colors} = useTheme()
    const [modal, setModal] = useState(false);

    const toggleModal = (aux:boolean) => setModal(aux);

    return (
        <View style={{flex:1,backgroundColor: colors.backgroundScreen,alignItems:'center'}}>

            <View style={[styles.raia,{backgroundColor:colors.backgroundRaia}]}>
                <ScrollView 
                    centerContent={true}
                    fadingEdgeLength={20}>
                    {task.map((task:any) => (<Note key={task.id} task={task} />))}
 
                </ScrollView>
            </View>
            <TouchableWithoutFeedback onPress={()=> setModal(true)}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:"#226ED8", fontWeight:'normal', fontSize:18}}> Criar note </Text>
                    <Ionicons name="add-sharp" size={24} color="#226ED8" />
                </View>
            </TouchableWithoutFeedback>
            <ModalNote isOpen={modal} toggleModal={toggleModal}/>   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    raia:{
        marginTop:hp('2%'),
        marginBottom:hp('2%'),
        height: hp('70%'),
        width:wp('90%'),
        borderRadius:10,
        flexDirection: 'column',
        justifyContent:'center'
    },
    modal:{
        position:'relative',
        marginTop:hp('18%'),
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

export default Notes;
