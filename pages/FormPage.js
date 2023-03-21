import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SimpleButton from '../components/SimpleButton';
import { BasketContext } from '../contexts/BasketContext';
import FormInput from '../components/FormInput';

const fieldMapper = {
  fullName: 'name',
  email: 'emailAddress',
  address: 'streetAddressLine1',
  city: 'addressCity',
  state: 'addressState',
  zipCode: 'postalCode',
}

const FormPage = ({navigation}) => {
  const { personalData, setPersonalData } = React.useContext(BasketContext);
  const [formData, setFormData] = React.useState(personalData);
  const [errors, setErrors] = React.useState({
    fullName: formData.fullName ? false : true,
    email: formData.email ? false : true,
    address: formData.address ? false : true,
    city: formData.city ? false : true,
    state: formData.state ? false : true,
    zipCode: formData.zipCode ? false : true,
  });

  const handleInputChange = (name, value) => {
    let newFormData = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  }

  const handleSubmitForm = () => {
    if (!checkErrors(errors)) {
      setPersonalData(formData);
      navigation.navigate("Summary")
    }
  }

  const handleErrors = (name, value) => {
    let newErrors = { ...errors };
    if (newErrors[name] !== value) {
      newErrors[name] = value;
      setErrors(newErrors);
    }
  }

  let disabled = checkErrors(errors);
  return (
    <ScrollView style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>PERSONAL DETAILS</Text>
        <View style={styles.formContainer}>
          <FormInput name="fullName" label="Full name"
            onChange={handleInputChange}
            textContentType={fieldMapper['fullName']}
            value={formData.fullName}
            onError={handleErrors}
          />
          <FormInput name="email" label="Email"
            onChange={handleInputChange}
            textContentType={fieldMapper['email']}
            value={formData.email}
            onError={handleErrors}
          />
          <FormInput name="address" label="Address" 
            onChange={handleInputChange} 
            value={formData.address}
            textContentType={fieldMapper['address']} 
            onError={handleErrors}
          />
          <FormInput name="city" label="City" 
            onChange={handleInputChange} 
            textContentType={fieldMapper['city']} 
            value={formData.city} 
            onError={handleErrors}
          />
          <FormInput name="state" label="State"
           onChange={handleInputChange} 
           textContentType={fieldMapper['state']} 
           value={formData.state} 
           onError={handleErrors}
           />
          <FormInput name="zipCode" label="Zip Code"
            onChange={handleInputChange} 
            textContentType={fieldMapper['zipCode']} 
            value={formData.zipCode} 
            onError={handleErrors}
          />        
          </View>
        <SimpleButton style={[disabled ? styles.inactive : null]} title='View Summary' disabled={disabled} 
          onPress={handleSubmitForm}
        />
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

function checkErrors(obj) {
  if (Object.entries(obj).find(([key, val]) => val === true)) return true;
  return false;
}