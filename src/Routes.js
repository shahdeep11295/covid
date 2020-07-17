import * as React from 'react';
import { Button, View, Text, Image, Dimensions, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, } from 'react-navigation-tabs';
// import {  } from "./assets";

import { scale, moderateScale, verticalScale } from './components/Scale';

import SplashScreen from "./Screens/SplashScreen";
import Home from "./Screens/Home";
import StateWise from "./Screens/StateWise";
import Updates from "./Screens/Updates";

const HomeScreen = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerLeft:<Image
      style={{ width: scale(25), height: scale(25),marginLeft:scale(15)}}
      source={require('./assets/covid.png')}
      resizeMode='contain' />,
      title: 'COVID-19',
      headerTitleStyle: {
        color: '#000000',
        fontWeight: "900",
      },
    },
  }
})

const StateWiseScreen = createStackNavigator({
    StateWise: {
    screen: StateWise,
    navigationOptions: {
      headerLeft:<Image
      style={{ width: scale(25), height: scale(25),marginLeft:scale(15)}}
      source={require('./assets/covid.png')}
      resizeMode='contain' />,
      title: 'COVID-19',
      headerTitleStyle: {
        color: '#000000',
        fontWeight: "900",
      },
    },
  },
})

const UpdatesScreen = createStackNavigator({
  Updates: {
  screen: Updates,
  navigationOptions: {
    header: null,
  },
},
})

const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  StateWise: {
    screen: StateWiseScreen
  },
  // Updates: {
  //   screen: UpdatesScreen
  // }
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        return <Image
          style={{ width: scale(21.7), height: scale(16.06), borderWidth: 0, }}
          source={focused
            ? require('./assets/india1.png') : require('./assets/india.png')}
          resizeMode='contain' />;
      } else if (routeName === 'StateWise') {
        return <Image
          style={{ width: scale(18), height: scale(18), borderWidth: 0, }}
          source={focused
            ? require('./assets/usa1.png') : require('./assets/usa.png')}
          resizeMode='contain' />;
      } else if (routeName === 'Updates') {
        return <Image
          style={{ width: scale(18), height: scale(18), borderWidth: 0, }}
          source={focused
            ? require('./assets/refresh1.png') : require('./assets/refresh.png')}
          resizeMode='contain' />;
      }
    },
  }),
  tabBarOptions: {
    activeTintColor: '#0093E9',
    inactiveTintColor: '#A8A8A8',
    style: {
      backgroundColor: '#FFFFFF',
      height: scale(45)
    }
  },
});

const Root = createSwitchNavigator({
  SplashScreen: SplashScreen,
  App: BottomTabNavigator,
},
  {
    initialRouteName: 'SplashScreen',
  })

const RootStack = createStackNavigator({
  Root: {
    screen: Root,
    navigationOptions: {
      header: null,
    },
  },
},
  {
    initialRouteName: 'Root',
  })

const AppContainer = createAppContainer(RootStack);

export default class Routes extends React.Component {
  render() {
    return <AppContainer />;
  }
}