import React from "react";
import { View, Text, StyleSheet, Button,ScrollView } from "react-native";

import Task from '../Task/Task';

const Fazendo = ({}) => {
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
        backgroundColor: "#141414"
    },
    raia:{
        marginTop:100,
        backgroundColor: "#333333",
        width:290,
        borderRadius:10,
        marginBottom:20,
        height: 450,
    }
});