import React from 'react';
import { Text , StyleSheet ,TouchableOpacity ,View } from 'react-native';

const ButtonWithBackground =  props => (
    <TouchableOpacity onPress={props.onPress} >
        <View  style={[style.button,{backgroundColor: props.color}]} >
            <Text>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const style= StyleSheet.create({
    button:{
        padding:10,
        margin:5,
        borderRadius:5,
        borderWidth:1,
        borderColor:'black'

    }
});

export default ButtonWithBackground;