import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const SimpleButton = ({title, onPress, style}) => {

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

export default SimpleButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#018dec',
    color: 'white',
    borderRadius: 15,
    textAlign: 'center',
    paddingVertical: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white'
  },
  shadowProp: {
    shadowColor: 'red',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
