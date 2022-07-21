import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Feito from '../Kanban/Feito';
import Fazendo from '../Kanban/Fazendo';
import Fazer from '../Kanban/Fazer';

const Home2 = ({}) => {

    const Tab = createMaterialTopTabNavigator();

    return (
       <Tab.Navigator
            
            backBehavior="order"
            initialRouteName="Fazer"
            screenOptions={{
                tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold', color: '#fff' },
                tabBarStyle: { backgroundColor: '#101010' },
              }}
       >
            <Tab.Screen name="Fazer" component={Fazer} />
            <Tab.Screen name="Fazendo" component={Fazendo} />
            <Tab.Screen name="Feito" component={Feito} />
            
        </Tab.Navigator>
    );
}

export default Home2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#141414"
    }
});