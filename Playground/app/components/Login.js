// Login.js - https://appdividend.com/2018/03/19/beginners-guide-to-create-react-native-application/

import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput
} from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    alignSelf: "center"
  },
  input: {
    height: 50,
    width: 200,
    marginTop: 30,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "green"
  }
});

export default class Login extends Component {
  render() {
    return (
      <View>
        <Image style={styles.image} source={require("../images/login.png")} />
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
    );
  }
}
