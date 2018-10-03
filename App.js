import React from 'react';
import {createStackNavigator} from 'react-navigation';
import WeatherScreen from './components/ZipCodeScreen';
import ZipCodeScreen from './components/ZipCodeScreen';

const RootStack = createStackNavigator({
  Weather:WeatherScreen,
  ZipCode:ZipCodeScreen
},{
  initialRouteName:'Zipcode',
})
export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}


