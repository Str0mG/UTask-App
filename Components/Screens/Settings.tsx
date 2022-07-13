import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Settings = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text> Settings </Text>
            <Button
                title="Go to Settings"
                onPress={() => alert("Go to Settings")}
            />
        </View>
    );
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2a2a2a"
    }
});