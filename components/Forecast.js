import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component{
    render(){
        return (
           <View>
               <Text style={mystyle.mytext}>{this.props.main}</Text>
               <Text style={mystyle.mytext}>{this.props.description} </Text>
               <Text style={mystyle.mytext}>{this.props.temp} </Text>
               <Text style={mystyle.mytext}>Degree Celcius</Text>
           </View>     
        );
    }
}
const mystyle = StyleSheet.create({
    mytext:{
        fontSize:20,
        textAlign:'center',
     },
});