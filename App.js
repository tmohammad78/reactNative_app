import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity ,Platform } from "react-native";
import { DrawerItems, SafeAreaView } from "react-navigation";

import SharePlace from "./src/screens/sharePlaceScreen";
import FindPlace from "./src/screens/FindPlaceScreen";
import DetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import Icon from "react-native-vector-icons/Ionicons";
import { Provider } from "react-redux";
import Auth from "./src/screens/Auth/Auth";

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import configureStore from "./src/store/configureStore";
class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
export default App;

const DashboardTabNavigator = createBottomTabNavigator(
  {
    SharePlace: {
      screen: SharePlace,
      navigationOptions: {
        tabBarIcon: ({}) => {
          let IconComponent = Icon;
          return <IconComponent  name={Platform.OS === 'android' ? 'md-share-alt' : 'ios-share' } size={30} color={"red"} />;
        }
      }
    },
    FindPlace: {
      screen: FindPlace,
      navigationOptions: {
        tabBarIcon: ({}) => {
          let IconComponent = Icon;
          return <Icon name={Platform.OS === 'android' ? 'md-map' : 'ios-map' } size={30} color={"red"} />;
        }
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu' }
            size={30}
          />
        )
      };
    }
  }
);

const DetailScreenNavigator = createStackNavigator({
  DetailScreen: DetailScreen
});

const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: DashboardStackNavigator
    },
    DetailScreen: {
      screen: DetailScreenNavigator
    }
  },
  {
    contentComponent: (props) => (
      <View style={Style.container}>
        <TouchableOpacity>
          <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerItems {...props} />
            <View style={Style.drawItem}>
              <Icon
                 name={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out' }
                size={30}
                color="#aaa"
                style={Style.drawItemIcon}
              />
              <Text>Logout</Text>
            </View>
            <Button title="Logout" onPress={() => alert("ddd")} />
          </SafeAreaView>
        </TouchableOpacity>
      </View>
    )
  }
);

const Style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "white"
  },
  drawItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee"
  },
  drawItemIcon: {
    marginRight: 10
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: Auth },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);
