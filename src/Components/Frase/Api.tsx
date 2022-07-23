import React, {useState, useEffect} from "react";
import { View,Text,StyleSheet,Share,ActivityIndicator,TouchableHighlight } from "react-native";
import { FontAwesome,MaterialIcons } from '@expo/vector-icons';


const Api = () => {
    
    const [frase, setFrase] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://zenquotes.io/api/random")
        .then(response => response.json())
        .then(data => {
            setFrase(data[0].q+"- "+data[0].a);
            setLoading(false);
        })
        .catch(() => {
            alert("Não foi possível obter a frase");
            });
    }, []);
    
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:frase.toString(),
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert("Não foi possível compartilhar a frase");
        }
      };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <MaterialIcons name="insights" size={24} color="#226ED8" style={{position:'absolute',left:7, top:0}} />
                <Text style={{color:'#fff'}} >Frase do dia</Text>
                <TouchableHighlight onPress={onShare}>
                  <FontAwesome name="share" size={16} color="#fff" style={{position:'absolute', margin:3}} />
                </TouchableHighlight>
                
            </View>
            <Text style={{color:'#fff', justifyContent:'center', alignSelf:'center'}}>{frase}</Text>
            <ActivityIndicator
                size="large"
                animating={loading}
                style={{position:'absolute', top:35}}
            ></ActivityIndicator>
        </View>
    );    
}

export default Api;

const styles = StyleSheet.create({
    container: {
        width:360,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "#3D3D3D",
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