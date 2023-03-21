import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import SimpleButton from '../components/SimpleButton';
import { BasketContext } from '../contexts/BasketContext';
import FormInput from '../components/FormInput';

const {width} = Dimensions.get('window');

const FormPage = () => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const {setPersonalData, minifig} = React.useContext(BasketContext);

  const handleInputChange = (name, value) => {
    let newFormData = {...formData};
    newFormData[name] = value;
    setFormData(newFormData);
  }

  console.log(formData);
  return (
    <ScrollView style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>PERSONAL DETAILS</Text>
        <View style={styles.formContainer}>
          <FormInput name="fullName" label="Full name" onChange={handleInputChange} textContentType='name'/>
          <FormInput name="email" label="Email" onChange={handleInputChange} textContentType='emailAddress'/>
          <FormInput name="address" label="Address" onChange={handleInputChange} textContentType='streetAddressLine1'/>
          <FormInput name="city" label="City" onChange={handleInputChange} textContentType='addressCity'/>
          <FormInput name="state" label="State" onChange={handleInputChange} textContentType='addressState'/>
          <FormInput name="zipCode" label="Zip Code" onChange={handleInputChange} textContentType='postalCode'/>
        </View>
        <SimpleButton style={[!minifig ? styles.inactive : null]} title='View Summary' disabled={!minifig}/>
      </View>
      
    </ScrollView>
  )
}

export default FormPage;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#1f2136',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    textAlign: 'center',
    marginTop: '15%',
    marginBottom: '10%',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inactive: {
    backgroundColor: 'grey'
  },
  formContainer: {
    marginVertical: 20
  }
});