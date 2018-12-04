import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Home = props => (
  <View style={styles.homeContainer}>
    <Text style={styles.welcome}>Home!</Text>
    <Button
      onPress={() => props.navigation.navigate("Settings")}
      title="Home"
    />
  </View>
);

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1111FF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
