import React from "react";
import { View, Text, StyleSheet, Button,ScrollView } from "react-native";

import Task from '../Task/Task';

const Feito = ({}) => {
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

export default Feito;

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
    }
});