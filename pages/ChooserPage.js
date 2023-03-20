import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SimpleButton from '../components/SimpleButton';
import Carousel from '../components/Carousel';

const ChooserPage = () => {


  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>CHOOSE YOUR MINIFIG</Text>
        <Carousel/>
        <SimpleButton style={styles.button} title='Choose Figure'/>
      </View>
    </View>
  )
}

export default ChooserPage;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#1f2136',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    textAlign: 'center',
    marginTop: '25%',
    marginBottom: '10%',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    width: '50%',
  }
});
