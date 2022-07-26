import React, { useState } from "react";
import { View, StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useTheme } from "styled-components/native";

import Api from "../Frase/Api"
import Calendario from "../Frase/Celendar"


const Frase = () => {
    const [teste,setTest] = useState(false)
    const {colors} = useTheme()

    return (
        <View style={[styles.container,{backgroundColor:colors.backgroundScreen}]}>
            <View style={{marginTop:hp('5%')}}>
                <Api/>
            </View>
            
            <View style={{marginTop:hp('6%')}}>
                
                <Calendario/>
            </View>
            
        </View>
    );
}

export default Frase;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: 'column',
    },
});