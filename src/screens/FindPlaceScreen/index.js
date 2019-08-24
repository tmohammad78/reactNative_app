import React , { Component } from 'react';
import { View,Text } from 'react-native';
import { connect  } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component{
    itemSelectHandler = key => {
        const selPlace = this.props.places.find( place => {
            return place.key === key;
        })
        debugger;
            this.props.navigation.push('DetailScreen',{
                title:selPlace.name,

            })
    }
    render(){    
        console.log('test',this.props);    
        return (
            <View>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectHandler}  />
            </View>
        )
    }
}

const mapStateToProps = state => {
   return {
       places:state.places.places
   };
};

export default connect(mapStateToProps,null)(FindPlaceScreen);