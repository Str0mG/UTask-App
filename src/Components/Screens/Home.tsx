import React from "react";
import { Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Feito from '../Kanban/Feito';
import Fazendo from '../Kanban/Fazendo';
import Fazer from '../Kanban/Fazer';
import { useTheme } from "styled-components/native";

const Home2 = ({}) => {

    const Tab = createMaterialTopTabNavigator();
    const {colors} = useTheme()

    return (
       <Tab.Navigator
            backBehavior="order"
            initialRouteName="Fazer"
            screenOptions={{
                tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold', color: '#fff' },
                tabBarStyle: { backgroundColor: colors.headerKanban, borderTopWidth:0},
                tabBarIndicatorStyle: { backgroundColor: colors.indicatorTab },

              }}
            initialLayout={{ width: Dimensions.get('window').width }}
       >
            <Tab.Screen name="Fazer" component={Fazer} />
            <Tab.Screen name="Fazendo" component={Fazendo} />
            <Tab.Screen name="Feito" component={Feito}  />
        </Tab.Navigator>
    );
}

export default Home2;
