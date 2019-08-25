import React, { Component } from "react";
import { View, Button, StyleSheet, ScrollView } from "react-native";

import { connect } from "react-redux";
import { addPlace } from "../../store/actions/index";

import PlaceInput from "../../components/PlaceInput/PlaceInput";
import MainText from "../../components/Ui/MainText";
import HeadingText from "../../components/Ui/TextHeading";
import PickLocation from "../../components/PickLocation";
import PickImage from "../../components/PickImage";

class sharePlaceScreen extends Component {
  state = {
    placeName: ""
  };

  placeAddHandler = () => {
    if (this.state.placeName.trim() !== "") {
      this.props.onAddPlace(this.state.placeName);
    }
  };

  placeNameChangeHanlder = (val) => {
    this.setState({
      placeName: val
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={Styles.container}>
          <MainText>
            <HeadingText>Share a place with us</HeadingText>
          </MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placeNameChangeHanlder}
          />
          <View style={Styles.button}>
            <Button title="share place" onPress={this.placeAddHandler} />
          </View>
          {/* <PlaceInput onPlaceAdded={this.placeAddHandler}  /> */}
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  };
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  previewImage: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
});

export default connect(
  null,
  mapDispatchToProps
)(sharePlaceScreen);
