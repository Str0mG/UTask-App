import React, {useState} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, Appearance, Modal, Switch,TouchableHighlight } from 'react-native';
import {MaterialIcons,Entypo,FontAwesome5,AntDesign} from '@expo/vector-icons';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from '../../store/store';

import Home from '../Screens/Home';
import Frase from '../Screens/Tools';

import themes from '../../themes';
import MyModal from '../Modal/Moda'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const [modal, setModal] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);

    const toggleSwitch = () => {};
    const toggleModal = () => setModal(previousState => !previousState);

    return (
        <Provider store={store}>
            <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
                <ThemeProvider theme={{
                    colors: {
                        primary: '#3867D6',

                    },
                    space:{
                        xs: '8rem',
                        sm: '16rem',
                    }
                }}>
                    <Tab.Navigator
                        screenOptions={{
                            tabBarShowLabel: false,
                            tabBarStyle:{
                                position: 'absolute',
                                bottom: 30,
                                left: 20,
                                right: 20,
                                backgroundColor: '#333333',
                                borderRadius: 20,
                                height: 70,
                                ...styles.shadow,
                                borderTopWidth: 0,
                            },
                            headerTintColor: '#3867D6',
                            headerStyle: {
                                backgroundColor: '#333333',
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
                                    <Switch
                                        trackColor={{ false: "#111111", true: "#111111" }}
                                        thumbColor={isEnabled ? "#FAFAFA" : "#FAFAFA"}
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                        style={{marginRight: 10}}
                                    />),
                                headerLeft: () => (
                                    <TouchableHighlight underlayColor={'none'} onPress={()=> setModal(true)}>
                                        <Image
                                        source={require('../../../darkLogo.png')}
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
                                <Switch
                                    trackColor={{ false: "#FFC93F", true: "#111111" }}
                                    thumbColor={isEnabled ? "#FAFAFA" : "#FAFAFA"}
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                    style={{marginRight: 10}}
                                />),
                            headerLeft: () => (
                                <TouchableHighlight underlayColor={'none'} onPress={()=> setModal(true)}>
                                    <Image
                                    source={require('../../../darkLogo.png')}
                                    style={{top:1,height:'80%',resizeMode: 'contain' }}
                                    />
                                </TouchableHighlight>),
                        }}
                    />
                    
                    </Tab.Navigator>
                    <MyModal visible={modal} toggleModal={toggleModal}/>
                </ThemeProvider>
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