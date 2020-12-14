import React, {Component} from 'react';
import {StyleSheet, Image, View} from 'react-native';

import icon from '../assets/iconSmall.png';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imageIcon} source={icon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageIcon: {
    alignSelf: 'center', 
    top:25,
},
});