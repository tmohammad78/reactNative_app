import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import FindPlaceScreen from "../FindPlaceScreen";
import sharePlaceScreen from "../sharePlaceScreen";
import Icon from "react-native-vector-icons/Ionicons";

// Icon.getImageSource("map",30)
// Icon.getImageSource("share-alt",30);
const HomeScreenTabNavigator = createBottomTabNavigator({
  FindPlaceScreen: {
    screen: FindPlaceScreen,
    navigationOptions: {
      title: "FindPlace",
      headerLeft: null,
      tabBarOptions: {
        showIcon: true
      },
      tabBarIcon: ({}) => {
        let IconComponent = Icon;
        return <Icon name="md-map" size={30} color={"red"} />;
      }
    }
  },
  sharePlaceScreen: {
    screen: sharePlaceScreen,
    navigationOptions: {
      title: "sharePlace",
      headerLeft: null,
      tabBarIcon: ({}) => {
        let IconComponent = Icon;
        return <IconComponent name="ios-share-alt" size={30} color={"red"} />;
      }
    }
  }
});

class HomeScreen extends React.Component {
  render() {
    console.log("homescreen", this.props);
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", marginTop: 20 }}>Home</Text>
      </View>
    );
  }
}

const DrawerNavigator = createDrawerNavigator(
  {
    dd: HomeScreen
  },
  {
    drawerBackgroundColor: "rgba(255,255,255,.9)",
    overlayColor: "#6b52ae",
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#6b52ae"
    }
  },
  {
    initialRouteName: "Home"
  }
);

const test = createSwitchNavigator(
  {
    HomeScreenTabNavigator: HomeScreenTabNavigator,
    DrawerNavigator: DrawerNavigator
  },
  {
    initialRouteName: "HomeScreenTabNavigator"
  }
);

const AppTab = createAppContainer(test);
export default AppTab;
