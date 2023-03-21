import * as React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import validator from 'validator';

const {width} = Dimensions.get('window');
const FORM_WIDTH = width * 0.8; 

export default function FormInput ({name, label, onChange, textContentType, ...props}) {
  const [error, setError] = React.useState(false);
  const handleInputValueChange = (text) => {
    const isError = validate(textContentType, text);
    console.log(isError);
    setError(isError);
    onChange(name, text);
  };
  console.log(error);
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.input, error ? styles.error : null ]} onChangeText={handleInputValueChange} {...props}/>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15
  },  
  input: {
    backgroundColor: 'white',
    width: FORM_WIDTH,
    height: 40,
    marginVertical: 10,
    padding: 10
  },
  error: {
    color: 'red'
  }
});

const validate = (type, value) => {
  switch(type){
    case 'name':
    case 'addressCity':
    case 'addressState':
      return validator.isAlpha(value) && !validator.isEmpty(value)
        &&  validator.isLength(value, {max: 50})
    case 'streetAddressLine1':
      return validator.isAlphanumeric(value) && !validator.isEmpty(value)
      &&  validator.isLength(value, {max: 50})
    case 'postalCode':
      return validator.isPostalCode(value) && !validator.isEmpty(value)
    case 'emailAddress':
      return validator.isEmail(value) && !validator.isEmpty(value)
  }
}