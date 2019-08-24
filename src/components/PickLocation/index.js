import React, { Component } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

class PickLocation extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.placeHolder}>
          <Text>Map</Text>
        </View>
        <View style={Styles.button}>
          <Button title="Locate ME" />
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeHolder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  }
});
export default PickLocation;
