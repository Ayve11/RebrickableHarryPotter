import * as React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import validator from 'validator';

const {width} = Dimensions.get('window');
const FORM_WIDTH = width * 0.8; 

export default function FormInput ({name, label, onChange, onError, textContentType, ...props}) {
  const [errors, setErrors] = React.useState([]);
  const handleInputValueChange = (text) => {
    onChange(name, text);
    let newErrors = validateField(textContentType, text);
    setErrors(newErrors);
    onError(name, newErrors.length > 0);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.input ]} onChangeText={handleInputValueChange} {...props}/>
      <Text style={styles.helperText}>{errors.toString()}</Text>
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
  helperText: {
    color: 'red',
    height: 24,
    fontSize: 14,
    overflow: 'hidden'
  }
});

const validateField = (type, value) => {
  let errors = [];
  if(validator.isEmpty(value)) errors.push("Field must not be empty");
  if(!validator.isLength(value, {max: 50})) errors.push("Field is too long");
  switch(type){
    case 'name':
    case 'addressCity':
    case 'addressState':
      if(!validator.isAlpha(value)) errors.push("Field must contain only letters");
      break;
    case 'streetAddressLine1':
      if(!validator.isAlphanumeric(value)) errors.push("Field must contain only letters and digits");
      break;
    case 'postalCode':
      if(!validator.isPostalCode(value, 'PL')) errors.push("Field is not a valid zip code");
      break;
    case 'emailAddress':
      if(!validator.isEmail(value)) errors.push("Field is not a valid email");
  }
  return errors;
}
