import React from "react";
import { View, Text, StyleSheet, Alert, TouchableWithoutFeedback} from "react-native";
import {MaterialCommunityIcons,Entypo,AntDesign,Ionicons} from '@expo/vector-icons';
import {useDispatch} from 'react-redux';
import {actions} from '../../actions/task.actions';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useTheme } from "styled-components";
//props:

const Task = (task:any) => {
    const {colors} = useTheme()
    const [visible, setVisible] = React.useState(false);
    const [desc, setDesc] = React.useState('Ler Descrição');

    
    interface emoti {
        nome: string
    }
    const [emoti, setEmoti] = React.useState<'chevron-small-up' | 'chevron-small-down'>('chevron-small-down');

    const dispatch = useDispatch();
    const handleDelete = ( ) => {
        Alert.alert(
            'Deletar Task',
            'Você tem certeza que deseja deletar esta taks?',
            [
                {text: 'Cancel'},
                {text: 'OK', onPress: () => dispatch(actions.remover(task.task))},
            ],
            
          ) 
    }

    const handleNext = ( ) => {
        dispatch(actions.next(task.task));
    }

    const handleVisibility = ( ) => {
        setVisible(!visible);
        if(desc === 'Ler Descrição'){
            setDesc('Esconder Descrição');
            setEmoti('chevron-small-up');
            
            
        }else{
            setDesc('Ler Descrição');
            setEmoti('chevron-small-down');
            
        }
    }

    return (
        <View style={[styles.container,{backgroundColor:colors.backgroundTask}]}>
                {/* <MaterialCommunityIcons name="playlist-edit" size={24} color="black" style={{position:'absolute', right:20,top:0, padding:10}} /> */}
                <Ionicons name="ios-trash-outline" size={18} color={colors.trash} onPress={handleDelete}  style={{position:'absolute', right:0,top:0, padding:10}}  />  
                <Text style={[{alignSelf:'flex-start',fontWeight:'bold', fontSize:16, padding:10},{color:colors.text}]}>  {task.task.title} </Text>
                <TouchableWithoutFeedback onPress={handleVisibility} style={{width:140}}>
                    <View style={{flexDirection:'row', paddingLeft:17}}>
                        <Text style={{fontSize:13, paddingTop:10, color:colors.text}} >{desc}</Text>
                        <Entypo name={emoti} size={18} style={{paddingTop:11 ,color:colors.text}}/>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{}}>
                    {visible && <Text style={[{color:'#000', maxWidth:230, paddingLeft:18, paddingBottom:10,textAlign: 'justify'},{color:colors.text}]}>{task.task.description} asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdddddd_</Text>}
                </View>
                
                
                <AntDesign name="rightcircle" size={21} onPress={handleNext}  style={{position:'absolute', right:0,bottom:0,paddingRight:10, paddingBottom:17,color:'#226ED8'}} />
            
        </View> 
    );
}

export default Task;

const styles = StyleSheet.create({
    container: {
        width:'90%',
        alignSelf:'center',
        minHeight:90,
        borderRadius: 10,
        marginBottom:7,
        marginTop:7,
    }
});