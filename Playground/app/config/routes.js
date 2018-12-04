import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

const HomeScreen = () => (
  <View style={styles.homeContainer}>
    <Text style={styles.welcome}>Home!</Text>
  </View>
);
const SettingsScreen = () => (
  <View style={styles.settingsContainer}>
    <Text style={styles.welcome}>Settings!</Text>
  </View>
);

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1111FF"
  },
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

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    intialRouteName: "Settings",
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" },
    swipeEnabled: true
  }
);

// ToDo Root stack

export default createAppContainer(TabNavigator);
