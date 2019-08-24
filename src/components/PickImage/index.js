import React , { Component } from  'react';
import { View , Button ,Image ,StyleSheet } from 'react-native';

import ImagePlaceHolder from '../../assets/beautiful-place.jpg';

class PickImage extends Component {
  render(){
      return (
          <View style={Styles.container}>
            <View style={Styles.placeHolder} >
                <Image source={ImagePlaceHolder} style={Styles.previewImage} />
            </View>
            <View style={Styles.button} >
                <Button  title='pick Image'  />
            </View>
          </View>
      )
  }
}

const Styles=StyleSheet.create({
    container:{
        width:'100%',
        alignItems: 'center',
    },
    placeHolder:{
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'#eee',
        width:'80%',
        height:150
    },
    button:{
        margin:8
    },
    previewImage:{
        flex:1,
        width:'100%',
        height:'100%'
    }
})
export default PickImage;