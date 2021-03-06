import React from "react";
import { TextInput, StyleSheet } from "react-native";

const defaultInput = (props) => (
  <TextInput {...props} style={[style.input, props.style]} />
);

const style = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    marginTop:8,
    marginRight: 8,
    marginLeft:8
  }
});

export default defaultInput;
