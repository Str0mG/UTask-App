import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView,TouchableWithoutFeedback } from "react-native";
import {useSelector} from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useTheme} from 'styled-components/native';

import ModalAdd from "../Modal/ModalAdd";
import Task from '../Task/TaskFazer';


const Fazer = ({}) => {
    const task = useSelector((state:any) => state.taskReducers.tasks.filter((task:any) => task.raia === 0));
    const [modal, setModal] = useState(false);
    const {colors} = useTheme()

    const toggleModal = (aux:boolean) => setModal(aux);

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
            <ModalAdd isOpen={modal} toggleModal={toggleModal}/>                                       
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
