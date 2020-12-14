import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {BASE, WHITE, SECUNDARY, BLACK, RED, DARKGREY} from '../constants/Colors';

export default class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nameButton}>
          <Text style={styles.nombre}>Hola mundo</Text>
          <View style={styles.colorView}> 
            <Text style={styles.styleButton}>Hola mundo </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    borderColor: SECUNDARY,
    borderBottomWidth:1,
    padding:5,
    fontWeight:'bold',
  },
  styleButton:{
    color: DARKGREY,
    fontFamily:'Helvetica',
    fontSize:18,
    alignSelf: 'center'
  },
  nameButton:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
 
  fecha:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  colorView:{
    borderRadius: 15, 
    borderWidth:2,
    borderColor: RED,
    width: 60,
    alignContent:'center',
    padding: 4,
    
  },

  nombre:{
    fontSize: 18,
    color: BLACK,
    fontFamily:'Helvetica',
    fontWeight: 'bold',
    alignSelf:'flex-start'
  },
});