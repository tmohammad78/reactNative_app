import React, { Component } from "react";
import { StyleSheet } from "react-native";
import DefaultInput from "../Ui/DefaultInput";

const PlaceInput = (props) => {
  return (
    <DefaultInput
      placeholder="place Name"
      value={props.placeName}
      onChangeText={props.onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;
