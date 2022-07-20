import React, {useState, useEffect} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, Appearance, Modal, Switch,TouchableHighlight } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { ThemeProvider } from 'styled-components';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

import Home from '../Screens/Home';
import Frase from '../Screens/Tools';
import Settings from '../Screens/Settings';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const [modal, setModal] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    //Verify if the theme is dark or light
    const colorScheme = Appearance.getColorScheme();

    

    const darkTheme = {
        backgroundColor: '#fff',
      };

    return (
        <ThemeProvider
            theme={darkTheme}
        >
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
                },
            }}
        >
        <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{  
                tabBarIcon: ({ focused }) => (
                <View style={{alignItems:'center', justifyContent:'center', top:1}}>
                    <FontAwesome5 name="tasks" size={21} style={{color: focused ? '#3867D6' : '#C4C4C4'}}/>
                    
                    <Text style={{color: focused ? '#3867D6' : '#C4C4C4', fontSize:13.1}}>TASK</Text>
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
                        source={require('../../assets/darkLogo.png')}
                        style={{top:1,height:'80%',resizeMode: 'contain' }}
                        />
                    </TouchableHighlight>
                    
                    ),
            }}
        />
        <Tab.Screen 
            name="Frase"
            component={Frase}
            options={{  
                tabBarIcon: ({ focused }) => (
                <View style={{alignItems:'center', justifyContent:'center', top:0}}>
                    <AntDesign name="calendar" size={25} style={{color: focused ? '#3867D6' : '#C4C4C4'}} />
                    <Text style={{color: focused ? '#3867D6' : '#C4C4C4', fontSize:13}}>TOOLS</Text>
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
                        source={require('../../assets/darkLogo.png')}
                        style={{top:1,height:'80%',resizeMode: 'contain' }}
                        />
                    </TouchableHighlight>),
            }}
        />
         
        </Tab.Navigator>
        <Modal          
            visible={modal}
            transparent={true}
            animationType="slide"

        >  
            
            <View style={styles.modal}>
                <Text style={{color:'#fff'}}>Foto</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#fff'}}>© Processo de Trainee Unect Jr. 2022.1</Text>
                    <MaterialIcons name="close" size={30} color="royalblue" onPress={() => setModal(false)} />
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#fff'}}>Feito com </Text>
                    <Entypo name="heart" size={19} color="#FFAFAF" />
                    <Text style={{color:'#fff'}}> por Gabriel Trombini</Text>
                </View>
                
                
                
            </View>
            
        </Modal>
        </ThemeProvider>
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
        
    }
});