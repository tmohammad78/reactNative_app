import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SharePlace from './src/screens/sharePlaceScreen';
import FindPlace from './src/screens/FindPlaceScreen';
import DetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import Auth from './src/screens/Auth/Auth';

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import configureStore from './src/store/configureStore';
class App extends Component {
  render() {
    const  store = configureStore(); 
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>

    )
  }
}
export default App;

// class Auth extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//           title="Login"
//           onPress={() => this.props.navigation.navigate('Dashboard')}
//         />
//         <Button title="Sign Up" onPress={() => alert('button pressed')} />
//       </View>
//     );
//   }
// }


const DashboardTabNavigator = createBottomTabNavigator(
  {
    SharePlace:{
      screen:SharePlace,
      navigationOptions : {
        tabBarIcon : ({}) => {
          let IconComponent = Icon;
          return <IconComponent name="ios-share-alt"  size={30} color={'red'} />
      }
      }
    },
    FindPlace:{
      screen : FindPlace,
      navigationOptions : {
        tabBarIcon : ({}) => {
          let IconComponent = Icon;
          return <Icon name="md-map"  size={30} color={'red'} />
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
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const DetailScreenNavigator = createStackNavigator(
  {
    DetailScreen : DetailScreen
  }
)

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  },
  DetailScreen : {
    screen : DetailScreenNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: Auth },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);
