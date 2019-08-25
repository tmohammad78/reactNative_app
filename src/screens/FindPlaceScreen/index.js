import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet ,Animated } from "react-native";
import { connect } from "react-redux";

import PlaceList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {

  state = {
    placeLoaded: false,
    removeAnim: new Animated.Value(1),
    placeAnim: new Animated.Value(0)
  };

  itemSelectHandler = (key) => {
    const selPlace = this.props.places.find((place) => {
      return place.key === key;
    });
    debugger;
    this.props.navigation.push("DetailScreen", {
      title: selPlace.name
    });
  };
  placesLoadedHandler = () => {
    Animated.timing(this.state.placeAnim, {
      toValue: 1,
      duration:500,
      useNativeDriver: true
    }).start();
  }
  placesSearchHandler = () => {
    Animated.timing(this.state.removeAnim,{
      toValue:0,
      duration:500,
      useNativeDriver:true
    }).start(()=> {
      this.setState({
        placeLoaded:true
      });
      this.placesLoadedHandler();
    });
  };

  render() {
    let content = (
      <Animated.View style={{ 
        opacity: this.state.removeAnim,
        transform: [
          {
            scale: this.state.removeAnim.interpolate({
              inputRange:[0 ,1],
              outputRange:[5,1]
            })
          }
        ]
       }} >
      <TouchableOpacity onPress={this.placesSearchHandler}>
        <View style={Style.searchButton}>
          <Text style={Style.searchButtonText}>Find place</Text>
        </View>
      </TouchableOpacity>
      </Animated.View>
    );
    if (this.state.placeLoaded) {
      content = (
        <Animated.View style={{
          opacity: this.state.placeAnim
        }}>
          <PlaceList
            places={this.props.places}
            onItemSelected={this.itemSelectHandler}
          />
        </Animated.View>
      );
    }
    return <View style={this.state.placeLoaded ? '' : Style.buttonContainer} >{content}</View>;
  }
}

const mapStateToProps = (state) => {
  return {
    places: state.places.places
  };
};

const Style = StyleSheet.create({
  buttonContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:"center"
  },
  searchButton: {
    borderColor:'orange',
    borderWidth: 3,
    borderRadius: 50 ,
    padding:20
  },
  searchButtonText: {
    color:"orange",
    fontWeight:'bold',
    fontSize:26
  }
});

export default connect(
  mapStateToProps,
  null
)(FindPlaceScreen);
