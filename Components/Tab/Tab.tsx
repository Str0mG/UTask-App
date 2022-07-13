import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Home from '../Screens/Home';
import Frase from '../Screens/ApiFrase';
import Settings from '../Screens/Settings';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    backgroundColor: '#2a2a2a',
                    borderRadius: 20,
                    height: 70,
                    ...styles.shadow,
                    borderTopWidth: 0,
                },
                headerTintColor: 'royalblue',
                headerStyle: {
                    backgroundColor: '#2a2a2a',
                },
                
            }}
        >
        <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{  
                tabBarIcon: ({ focused }) => (
                <View style={{alignItems:'center', justifyContent:'center', top:3}}>
                    <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12.5}}>HOME</Text>
                </View>
                ),
                headerTitle: 'UTask',
                headerTitleAlign: 'center',
            }}
        />
        <Tab.Screen 
            name="Frase" 
            component={Frase}
            options={{  
                tabBarIcon: ({ focused }) => (
                <View style={{alignItems:'center', justifyContent:'center', top:3}}>
                    <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12.5}}>FRASE DO DIA</Text>
                </View>
                ),
                headerTitle: 'UTask',
                headerTitleAlign: 'center',
            }}
        />
        <Tab.Screen 
            name="Settings" 
            component={Settings} 
            options={{  
                tabBarIcon: ({ focused }) => (
                <View style={{alignItems:'center', justifyContent:'center', top:3}}>
                    <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12.5}}>SETTINGS</Text>
                </View>
                ),
                headerTitle: 'UTask',
                headerTitleAlign: 'center', }}
        />
        </Tab.Navigator>
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
        
    }
});