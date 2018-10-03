import React from 'react';
import Weather from './components/Weather'
import {createStackNavigator} from 'react-navigation';
import WeatherScreen from './components/ZipCodeScreen';
import ZipCodeScreen from './components/ZipCodeScreen';

const RootStack = createStackNavigator({
  Weather:WeatherScreen,
  ZipCode:ZipCodeScreen
},{
  initialRouteName:'Weather',
})
export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}


