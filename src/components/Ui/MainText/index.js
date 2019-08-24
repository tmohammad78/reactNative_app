import React from 'react';
import { Text , StyleSheet } from 'react-native';

const defaultInput =  props => (
    <Text style={style.mainText} >{props.children}</Text>
)

const style= StyleSheet.create({
    mainText:{
        color:"black",
        backgroundColor:'transparent'
    }
});

export default defaultInput;