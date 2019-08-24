import React , { Component } from 'react';
import { View,Text ,TextInput , Button ,StyleSheet ,ScrollView } from 'react-native';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { connect } from 'react-redux';
import  {addPlace } from '../../store/actions/index';
class sharePlaceScreen extends Component{
    
    placeAddHandler = placeName => {
        this.props.onAddPlace(placeName);
    }
    render(){        
        return (
            <ScrollView contentContainerStyle={Styles.container} >
                <Text>Share a place with us</Text>
                <View style={Styles.placeHolder} ><Text>Image Preview</Text></View>
                <Button  title='pick Image' />
                <View style={Styles.placeHolder} ><Text>Map</Text></View>
                <Button  title='Locate ME' />
                <TextInput placeholder='place Me'  />
                <Button title='share place'  />
                {/* <PlaceInput onPlaceAdded={this.placeAddHandler}  /> */}
            </ScrollView>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onAddPlace : (placeName)=> dispatch(addPlace(placeName))
    }
}
const Styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    placeHolder:{
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'#eee',
        width:'80%',
        height:150
    }
})

export default connect(null,mapDispatchToProps)(sharePlaceScreen);