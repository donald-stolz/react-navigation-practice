import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Root from "./config/routes";
import { SafeAreaView } from "react-navigation";

export default class App extends Component {
  render() {
    return <Root />;
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    minHeight: 100
  }
});
