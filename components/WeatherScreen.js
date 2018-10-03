import React from 'react';
import {  Text } from 'react-native';
import Weather from './Weather';


export default class WeatherScreen extends React.Component {
  static navigationOptions = ({navigation}) =>{
      return {
          headerTitle: (<Text>Weather</Text>),
      }
  }
  render(){
      return(
          <Weather zipcode="90110" />
      );
  }
}