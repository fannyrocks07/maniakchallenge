import React, {Component} from 'react';
import {StyleSheet, Animated, View, AsyncStorage} from 'react-native';
import {BASE} from '../constants/Colors';
import { Actions } from 'react-native-router-flux';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import icon from '../assets/iconSmall.png';

export default class SplashScreen extends Component{

  constructor () {
    super();
    this.springValue = new Animated.Value(0.3);
  }

  componentDidMount () {
    this.spring(),
    setTimeout(() => {
      Actions.push('loginScreen')
    }, 6000);
    /*AsyncStorage.getItem('codigo').then((token) => {
      this.spring(),
      setTimeout(() => {
        
        if(token !== null){
          Actions.push('indicadores');
          this.setState({
            hasToken: true,
          })
        }else{
          Actions.push('loginScreen');
          this.setState({
            hasToken: false,
          })
        }
      }, 6000);
    });*/
  }

  spring () {
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 2
      }
    ).start()
  }

    render(){
      
      return(
        <View style={styles.container}>
          <Animated.Image
              style={{
              transform: [{scale: this.springValue}] }}
              source={icon}
          />
        </View>
      )
    }
  
}

const styles = StyleSheet.create({
    container: {
     flex:1,
     backgroundColor:BASE,
     width: wp('100%'),
     height: hp('100%'),
     justifyContent: 'center',
     alignItems: 'center'
    }
  });