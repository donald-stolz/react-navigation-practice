import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Settings = () => (
  <View style={styles.settingsContainer}>
    <Text style={styles.welcome}>Settings!</Text>
    <Button onPress={() => props.navigation.navigate("Home")} title="Home" />
  </View>
);

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#65F6F0"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
