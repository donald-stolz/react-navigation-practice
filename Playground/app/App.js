/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Home!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const App = createMaterialBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    intialRouteName: "Home",
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" }
  }
);
