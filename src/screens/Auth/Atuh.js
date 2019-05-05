import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
    //???
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Auth Screen</Text>
        <Button title="Switch to Login" onPress={this.loginHandler} />
        <TextInput placeholder="Your E-mail Address" />
        <TextInput placeholder="Password" />
        <TextInput placeholder="Confirm Password" />
        <Button title="Log In" onPress={this.loginHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%"
  }
});
export default AuthScreen;
