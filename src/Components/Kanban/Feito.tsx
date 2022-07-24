import { View,  StyleSheet, ScrollView } from "react-native";
import React from "react";
import {useSelector} from 'react-redux';

import Task from '../Task/TaskFeito';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Feito = ({}) => {
    const task = useSelector((state:any) => state.taskReducers.tasks.filter((task:any) => task.raia === 2));

    return (
        <View style={styles.container}>
            <View style={styles.raia}>
                <ScrollView 
                    centerContent={true}
                    contentContainerStyle={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                    fadingEdgeLength={20}>
                    {task.map((task:any) => (
                        <Task key={task.id} task={task} />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

export default Feito;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#141414"
    },
    raia:{
        marginTop:hp('7%'),
        marginBottom:hp('2%'),
        height: hp('50%'),
        width:wp('75%'),
        borderRadius:10,
        backgroundColor: "#333333",
        flexDirection: 'column',
        justifyContent:'center'
    }
});