import React, {useContext, useState} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image,Switch,TouchableHighlight } from 'react-native';
import {FontAwesome5,AntDesign} from '@expo/vector-icons';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from '../../store/store';
import { useTheme } from "styled-components/native";
// @ts-ignore
import SwitchWithIcons from "react-native-switch-with-icons" 


import Home from '../Screens/Home';
import Frase from '../Screens/Tools';
import MyModal from '../Modal/Moda'
import { ThemeContext, ThemeType } from "../../themes/Theme";


const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

    const [modal, setModal] = useState(false);
    const {toggleTheme, theme} = useContext(ThemeContext)
    const {colors, images} = useTheme()

    const isDarkMode = theme === ThemeType.dark

    const toggleModal = () => setModal(previousState => !previousState);

    return (
        <Provider store={store}>
            <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarShowLabel: false,
                        tabBarStyle:{
                            position: 'absolute',
                            bottom: 30,
                            left: 20,
                            right: 20,
                            backgroundColor: colors.backgroudBottomTab,
                            borderRadius: 20,
                            height: 70,
                            ...styles.shadow,
                            borderTopWidth: 0,
                        },
                        headerTintColor: colors.headerTitle,
                        headerStyle: {
                            backgroundColor: colors.headerContainer,
                            borderBottomWidth: 0,
                            elevation: 0,
                        },
                        headerTitleStyle: {
                            fontSize: 25,
                            fontWeight: 'bold',
                        },}} >
                    <Tab.Screen 
                        name="Home" 
                        component={Home} 
                        options={{  
                            tabBarIcon: ({ focused }) => (
                            <View style={{alignItems:'center', justifyContent:'center', top:1}}>
                                <FontAwesome5 name="tasks" size={21} style={{color: focused ? '#3867D6' : '#C4C4C4'}}/>
                                
                                <Text style={{color: focused ? '#3867D6' : '#C4C4C4', fontSize:11}}>TASK</Text>
                            </View>
                            ),
                            headerTitle: 'UTask 3.0',
                            headerTitleAlign: 'center',
                            headerRight: () => (
                                <SwitchWithIcons
                                onValueChange={toggleTheme}
                                value={isDarkMode}
                                style={{marginRight: 10}}
                                trackColor={{true: "#222222", false: "#FFC93F"}}
                                thumbColor={{true: "#FFFFFF", false: "#FFFFFF"}}
                                icon={{true: require('../../../assets/moon.png'), false: require('../../../assets/sun2.png')}}
                                iconColor={{true: "#222222", false: "#FBB910"}}
                                
                            />),
                            headerLeft: () => (
                                <TouchableHighlight onPress={()=> setModal(true)}>
                                    <Image
                                    source={images.logoUnect}
                                    style={{top:1,height:'80%',resizeMode: 'contain' }}
                                    />
                                </TouchableHighlight>
                                ),}}/>
                <Tab.Screen 
                    
                    name="Frase"
                    component={Frase}
                    options={{  
                        tabBarIcon: ({ focused }) => (
                        <View style={{alignItems:'center', justifyContent:'center', top:0}}>
                            <AntDesign name="calendar" size={25} style={{color: focused ? '#3867D6' : '#C4C4C4'}} />
                            <Text style={{color: focused ? '#3867D6' : '#C4C4C4', fontSize:11}}>TOOLS</Text>
                        </View>
                        ),
                        headerTitle: 'UTask 3.0',
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <SwitchWithIcons
                                onValueChange={toggleTheme}
                                value={isDarkMode}
                                style={{marginRight: 10}}
                                trackColor={{true: "#222222", false: "#FFC93F"}}
                                thumbColor={{true: "#FFFFFF", false: "#FFFFFF"}}
                                icon={{true: require('../../../assets/moon.png'), false: require('../../../assets/sun2.png')}}
                                iconColor={{true: "#222222", false: "#FBB910"}}
                            />),
                        headerLeft: () => (
                            <TouchableHighlight  onPress={()=> setModal(true)}>
                                <Image
                                source={images.logoUnect}
                                style={{top:1,height:'80%',resizeMode: 'contain' }}
                                />
                            </TouchableHighlight>),
                    }}
                />
                
                </Tab.Navigator>
                <MyModal visible={modal} toggleModal={toggleModal}/>
            </PersistGate>
        </Provider>
    );
}

export default TabNavigator;

const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#000',
        textShadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 3,   
    },
    modal:{
        backgroundColor: '#000',
        alignItems:'center',
        alignSelf:'center',
        top: '20%',
        position:'relative',
        padding:10,
        borderRadius:10,
        
        
    }
});