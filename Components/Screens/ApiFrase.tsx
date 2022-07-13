import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Frase = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Frase do dia</Text>
            <Button
                title="Go to Frase"
                onPress={() => alert("Go to Frase")}
            />
        </View>
    );
}

export default Frase;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2a2a2a"
    },
});