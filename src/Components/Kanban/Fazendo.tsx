import { View, StyleSheet,ScrollView } from "react-native";
import React from "react";
import {useSelector} from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Task from '../Task/TaskFazendo';
import { useTheme } from "styled-components/native";

const Fazendo = ({}) => {
    const {colors} = useTheme()
    const task = useSelector((state:any) => state.taskReducers.tasks.filter((task:any) => task.raia === 1));
  
    return (
        <View style={[styles.container,{backgroundColor: colors.backgroundScreen}]}>
            <View style={[styles.raia,{backgroundColor:colors.backgroundRaia}]}>
                <ScrollView
                    centerContent={true}
                    // contentContainerStyle={{
                    //     justifyContent: 'space-between',
                    //     alignItems: 'center',
                        
                    // }}
                    fadingEdgeLength={20}
                    >
                    {task.map((task:any) => (
                        <Task key={task.id} task={task} />
                    ))}
                </ScrollView>
            </View>
            
        </View>
    );
}

export default Fazendo;

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
    }
});