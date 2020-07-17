import React from "react";
import Routes from "./src/Routes";
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import Store from './src/Store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Routes />
      </Provider>
    );
  }
}