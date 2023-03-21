import * as React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import SimpleButton from '../components/SimpleButton';
import { BasketContext } from '../contexts/BasketContext';
import { getMinifigParts } from '../fetch';
import SummaryParts from '../components/SummaryParts';
import { SafeAreaView } from 'react-navigation';

const {width} = Dimensions.get('window');
const ITEM_LENGTH = width * 0.7; 

const SummaryPage = ({navigation}) => {
  const { minifig, personalData, clear} = React.useContext(BasketContext);
  const [parts, setParts] = React.useState([]);

  const getAndSetMinifigParts = async () => {
    let parts = await getMinifigParts(minifig.set_num);
    setParts(parts.results);
  }

  React.useEffect(() => {
    getAndSetMinifigParts();
  }, []);

  const handleSubmitForm = () => {
    let data = {minifig, parts, personalData}
    console.log(data, 'submited')
    navigation.navigate("Chooser");
    clear();
  }

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>SUMMARY</Text>
        <View>
          <View style={styles.itemContainer}>
            <Image source={{uri: minifig?.set_img_url}} style={styles.itemImage}/>
            <Text style={styles.itemText}>{minifig?.name}</Text>
          </View>
          <SummaryParts parts={parts}/>
        </View>
        <SimpleButton title='Submit' onPress={handleSubmitForm} style={styles.button}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SummaryPage;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#1f2136',
  },
  container: {
    textAlign: 'center',
    margin: '10%',
    padding: '10%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemContainer: {
    height: ITEM_LENGTH,
    width: ITEM_LENGTH,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  itemImage: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '600',
    margin: 20
  },
});
