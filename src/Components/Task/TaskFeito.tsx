import React , {useState}from "react";
import { View, Text, StyleSheet, Alert , TouchableWithoutFeedback} from "react-native";
import {MaterialIcons,Entypo,AntDesign,Ionicons} from '@expo/vector-icons';
import {useDispatch} from 'react-redux';
import {actions} from '../../actions/task.actions';
import { useTheme } from "styled-components/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Task = (task:any) => {
    const {colors} = useTheme()
    const [visible, setVisible] = useState(false);
    const [desc, setDesc] = useState('Ler Descrição');
    const [isHide, setIsHide] = useState(true)
    const [emoti, setEmoti] = useState<'chevron-small-up' | 'chevron-small-down'>('chevron-small-down');

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

    const handleReplay = ( ) => {
        dispatch(actions.replay(task.task));
    }


    const handleVisibility = ( ) => {
        setVisible(!visible);
        if(desc === 'Ler Descrição'){
            setDesc('Esconder Descrição');
            setEmoti('chevron-small-up');
            setIsHide(false);
            
        }else{
            setDesc('Ler Descrição');
            setEmoti('chevron-small-down');
            setIsHide(true);
        }
    }
    
    const handlePrev = ( ) => {
        dispatch(actions.prev(task.task));
    }

    return (
        <View style={[styles.container,{backgroundColor:colors.backgroundTask}]}>
                <Ionicons name="ios-trash-outline" size={18} color={colors.trash} onPress={handleDelete}  style={{position:'absolute', right:0,top:0, padding:10}}  />
                <Text style={[{alignSelf:'flex-start',fontWeight:'bold', fontSize:16, padding:10},{color:colors.text}]}>  {task.task.title} </Text>
                <TouchableWithoutFeedback onPress={handleVisibility} style={{width:140}}>
                    <View style={{flexDirection:'row', paddingLeft:17}}>
                        <Text style={{fontSize:13, paddingTop:11, color:isHide ? colors.text:colors.hideDesc}} >{desc}</Text>
                        <Entypo name={emoti} size={18} style={{paddingTop:12,color:isHide ? colors.text:colors.hideDesc}}/>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{}}>
                    {visible && <Text style={{color:colors.text, maxWidth:wp('52%'), paddingLeft:18, paddingBottom:10,textAlign: 'justify'}}>{task.task.description}+0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000</Text>}
                </View>
                <View style={{position:'absolute', right:0,bottom:0, flexDirection:'row',alignItems:'center', padding:8}}>
                    <AntDesign name="leftcircle" size={21} color='#226ED8' onPress={handlePrev} style={{paddingRight:2,paddingBottom:7}}   />
                    
                    <MaterialIcons name="replay-circle-filled" size={25.8} color="#226ED8" onPress={handleReplay} style={{paddingRight:1, paddingBottom:7}}   />
                </View>
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