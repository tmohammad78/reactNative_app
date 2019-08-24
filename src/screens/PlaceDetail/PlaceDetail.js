import React from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";

// import Icon from "react-native-vector-icons/Ionicons";

const placeDetail = props => {

  console.log('detail',props);

  return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={props.onItemDeleted}>
            <View style={styles.deleteButton}>
              {/* <Icon size={30} name="ios-trash" color="red" /> */}
            </View>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
});

export default placeDetail;
