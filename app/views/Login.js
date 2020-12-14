import React, {Component} from 'react';
import Logo from '../components/Logo';
import { BASE, WHITE, SECUNDARY, DARKGREY } from '../constants/Colors';
import { ImageBackground, StyleSheet, View, TextInput, KeyboardAvoidingView, Dimensions, Animated, TouchableOpacity, Text, Image, Easing, Alert, AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import spinner from '../assets/loading.gif';

const MARGIN = 40;
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class Login extends Component {

    constructor() {
        super();
    
        this.state = {
          isLoading: false,
          username: '',
          password: '',
          codigo:'',
          dataResponse:{}
        };
    
        this.buttonAnimated = new Animated.Value(0);
        this.growAnimated = new Animated.Value(0);
        this._onPress = this._onPress.bind(this);
    }

    /*userSingUp(){
      Actions.indicadores();
    }

    userLogin(){
      Actions.indicadores();
    }

    async saveItem(item, selectedValue){
      try{
        await AsyncStorage.setItem(item,selectedValue);
      }catch(error){
        console.error('AsyncStorage error: '+ error.message);
      }
    }*/

    _onPress() {
      if (this.state.username && this.state.password) {  
        try{
          const data = {
            "username": this.props.username,
            "password": this.props.password
          }
          fetch('challenge.maniak.co/api/login', {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-type": "application/json"
            },
            body: JSON.stringify(data)
          }).then(res=>res.json())
            .then((data) => {
                console.log('data '+data);
                
            });
          
        }catch(error){
          alert(error);
        } 

        
      }else{
        Alert.alert(
          "Campos Requeridos",
          "El campo de usuario y contraseña, son requeridos. Por favor, ingrese sus datos.",
          [
            {
              text: "Aceptar",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            }
          ],
          { cancelable: false }
        );
      }
    }
    
      _onGrow() {
        Animated.timing(this.growAnimated, {
          toValue: 1,
          duration: 200,
          easing: Easing.linear,
        }).start();
      }

    render(){
        const changeWidth = this.buttonAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
          });
          const changeScale = this.growAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [1, MARGIN],
          });
        return (
         <View style={styles.container}>
             <View style={styles.image}>
                <Logo/>
                  <KeyboardAvoidingView behavior="padding" style={styles.containerKeyboard}>
                    <View style={styles.inputWrapper}>
                        <TextInput
                        style={styles.input}
                        placeholder='Usuario'
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        editable={true}
                        autoCorrect={false}
                        returnKeyType='next'
                        placeholderTextColor= '#000' 
                        ref='username'
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                        />
                    </View>
                    <View style={styles.inputWrapperT}>
                        <TextInput
                        style={styles.input}
                        placeholder='Contraseña'
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        editable={true}
                        autoCorrect={false}
                        secureTextEntry={true}
                        placeholderTextColor= '#000' 
                        ref='password'
                        returnKeyType='next'
                        onChangeText={(password) => this.setState({password})}
                        value={this.setState.password}
                        />
                    </View>
                  </KeyboardAvoidingView>
                  <View style={styles.containerButton}>
                    <Animated.View style={{width: changeWidth}}>
                      <TouchableOpacity
                          style={styles.button}
                          onPress={this._onPress}
                          activeOpacity={1}>
                          {this.state.isLoading ? (
                          <Image source={spinner} style={styles.image} />
                          ) : (
                          <Text style={styles.text}>Entrar</Text>
                          )}
                      </TouchableOpacity>
                      <Animated.View
                          style={[styles.circle, {transform: [{scale: changeScale}]}]}
                      />
                    </Animated.View> 
                  </View> 
            </View>
         </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        width: wp('100%'),
        height: hp('100%')
    },
    image:{
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null,
        backgroundColor: BASE
    },
    input: {
        backgroundColor: WHITE, 
        borderRadius: 15, 
        borderColor: BASE, 
        borderWidth: 1, 
        width: DEVICE_WIDTH - 40, 
        height: 40, 
        fontSize: 18,
        fontFamily: 'Helvetica'
    },
    inputWrapper: {
        flex: 1,
        top:70,
    },
    inputWrapperT:{
      flex: 1,
      top:40
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 35,
    },
    containerKeyboard: {
      flex: 2,
      alignItems: 'center',
    },
      button: {
        backgroundColor: DARKGREY,
        height: MARGIN,
        marginTop: -MARGIN,
        alignSelf: 'center',
        borderRadius: 15,
        alignItems:'center',
        justifyContent:'center',
        zIndex: 100,
        width:100, 
      },
      circle: {
        height: MARGIN,
        width: 20,
        marginTop: -MARGIN,
        borderWidth: 1,
        borderColor: SECUNDARY,
        borderRadius: 100,
        alignSelf: 'center',
        zIndex: 99,
        backgroundColor: 'transparent',
      },
      text: {
        color: WHITE,
        backgroundColor: 'transparent',
        fontFamily: 'Helvetica',
        fontSize: 18
      },
      containerButton:{
        flex: 1,
        alignItems: 'center'
      }
  });