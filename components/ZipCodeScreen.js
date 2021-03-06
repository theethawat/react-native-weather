import React from 'react';
import { StyleSheet, FlatList,View,Text,TouchableHighlight } from 'react-native';

const availableZipItems = [
    {place : 'Hatyai',code:'90110'},
    {place : 'Bangkok',code:'10200'},
    {place : 'Nakhon Si Thammarat',code:'80000'},
    {place : 'Chaingmai',code:'50000'},
    {place : 'Khonkaen',code:'40000'},
]

const Zipitem = ({place,code,navigate}) =>(
   <View style={styles.zipItem}>
        <Text style={styles.zipPlace}>{place}</Text>
        <Text style={styles.zipCode}>{code}</Text>
   </View>
)

const styles = StyleSheet.create({
    zipPlace: {
      fontSize:20,
      textAlign:'left',
      flex:1,
    },
    zipCode: {
        fontSize:20,
        textAlign:'right',
        flex:1,
      },
    zipItem:{
        flex: 2,
        display:'flex',
        padding:22,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor:'#40e0d0',
        
    },

  });

  const _keyExtractor = item => item.code

  export default class ZipCodeScreen extends React.Component{
      static navigationOptions = ({navigation}) =>{
          return{
              headerTitle: (<Text>Choose a zip Code</Text>),
          }
      }
  render() {
      const {navigate} = this.props.navigation;
      return(
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem = { ({item}) => <Zipitem {...item} navigate ={navigate} />}
                />
        </View>
      );
  }
}