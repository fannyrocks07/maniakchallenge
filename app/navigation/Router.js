import React, {Component} from 'react';
import {
  Router,
  Scene
} from 'react-native-router-flux';
import {StyleSheet} from 'react-native';
import {BASE, WHITE, DARKGREY} from '../constants/Colors';
import Login from '../views/Login';
import Principal from '../views/Principal';
import SplashScreen from '../views/SplashScreen';


export default class Main extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
        <Scene
            key="splashscreen"
            component={SplashScreen}
            animation="fade"
            hideNavBar={true}
            initial={true}
          />
          <Scene
            key="loginScreen"
            component={Login}
            animation="fade"
            hideNavBar={true}
          />
           <Scene
            key="principalScreen"
            component={Principal}
            animation="fade"
            hideNavBar={true}
          />
         </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    justifyContent: 'center',
    alignItems:'center',
    alignSelf:'center',
    alignContent:'center',
    backgroundColor: BASE,
    color: WHITE, 
    fontFamily: 'Helvetica',
    fontSize: 20
  },
  label:{
    fontFamily:'Helvetica',
    fontSize:20,
    color: DARKGREY
  },
  active:{
    fontFamily:'Helvetica',
    fontSize:20,
    color: WHITE
  }
});