import React, { Component } from 'react';
import { View , Button ,ImageBackground ,StyleSheet } from 'react-native';
import AppTab from '../MainTab/MainTab';
import DefaultInput from '../../components/Ui/DefaultInput';
import TextHeading from '../../components/Ui/TextHeading';
import backgroundImg from '../../assets/background.jpg';
import ButtonWithBackground from '../../components/Ui/buttonWithbackground';
import MainText from '../../components/Ui/MainText';

class AuthScreen extends Component {
    static navigationOption = {
        title:'Auth'
    }

    loginHandler = () => {
        AppTab();
    }
    render () {
        return (
            <ImageBackground source={backgroundImg} style={style.backgroundImage}>
                <View style={style.container} >
                    <TextHeading>please Login</TextHeading>
                    <ButtonWithBackground color="#29aaf4">switch to Login</ButtonWithBackground>
                    <View style={style.inputContainer} >
                        <DefaultInput placeholder='your Email Address' style={style.input} />
                        <DefaultInput placeholder='your Pass' style={style.input} />
                        <DefaultInput placeholder='confirm Your Pass' style={style.input} />
                    </View>
                    <ButtonWithBackground onPress={()=> {
                        this.props.navigation.navigate('Dashboard')
                    }} color="#29aaf4">Submit</ButtonWithBackground>
                    
    {/* 
                    <Button title='open' onPress={()=> {
                        this.props.navigation.navigate('SideNav');
                    }} />
                    <Button title='sign up' onPress={()=> {
                        this.props.navigation.navigate('SignUp')
                    }}/> */}
                </View>
            </ImageBackground>
        );
    }
}


const style= StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'   
        },
        inputContainer:{
            width:"80%"
        },
        input:{
            backgroundColor:"#eee",
            borderColor:"#bbb"
        },
        backgroundImage:{
            width:'100%',
            flex:1
        }
});
export default AuthScreen;