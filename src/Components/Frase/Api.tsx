import React, {useState, useEffect} from "react";
import { View,Text,StyleSheet,Share,ActivityIndicator,TouchableHighlight } from "react-native";
import { FontAwesome,MaterialIcons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useTheme } from "styled-components/native";

const Api = () => {
    
    const [frase, setFrase] = useState("");
    const [loading, setLoading] = useState(true);
    const {colors} = useTheme()

    useEffect(() => {
        fetch("https://zenquotes.io/api/random")
        .then(response => response.json())
        .then(data => {
            setFrase(data[0].q+"- "+data[0].a);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
            setFrase("Se ficar pensando no que perdeu, nunca conseguirá ver o que está por vir. - Remy")
            });
    }, []);
    
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:frase.toString(),
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              alert("Não foi possível compartilhar a frase");
            } else {
              alert("Não foi possível compartilhar a frase");
            }
          } else if (result.action === Share.dismissedAction) {
            alert("Não foi possível compartilhar a frase");
          }
        } catch (error) {
          alert("Não foi possível compartilhar a frase");
        }
      };

    return (
        <View style={[styles.container,{backgroundColor:colors.backgroundApi}]}>
          <TouchableHighlight
            onPress={onShare}
          >
              <FontAwesome name="share" size={16} color={colors.text} style={{position:'absolute', right:0, top:0, paddingRight:14, paddingTop:8}} />
          </TouchableHighlight>
          <MaterialIcons name="insights" size={24} color={colors.insight} style={{position:'absolute',left:7, top:4, padding:9}} />
          
          <Text style={{color:colors.text, paddingLeft:50,fontSize:15, paddingTop:4, fontWeight:'bold', width:200}}>Frase do dia</Text>
            
            <Text style={{color:colors.text,paddingLeft:50,maxWidth:300, paddingTop:10,textAlign: 'justify'}}>{frase}</Text>
            <ActivityIndicator
                size="large"
                animating={loading}
                style={{position:'absolute', alignSelf:'center', paddingTop:50}}
            ></ActivityIndicator>
        </View>
    );    
}

export default Api;

const styles = StyleSheet.create({
    container: {
        width:360,
        minHeight:100,
        borderRadius: 20,
        position: 'relative',
        padding:10,
        
    },
    box:{
        width:360,
        flexDirection:'row',
        justifyContent:'space-around',
        margin:5,
        minHeight:42,
    },
    modal:{
        alignItems: "center",
        justifyContent: "center",
        color:'#fff'
    }
});