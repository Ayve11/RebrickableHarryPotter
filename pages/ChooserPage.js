import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SimpleButton from '../components/SimpleButton';
import Carousel from '../components/Carousel';
import { getMinifigs } from '../fetch';
import RandomGenerator from '../utils/RandomGenerator';
import { BasketContext } from '../contexts/BasketContext';

const ChooserPage = ({ navigation }) => {
  const [minifigs, setMinifigs] = React.useState([]);
  const { minifig } = React.useContext(BasketContext);

  const getAndSetMinifigs = async () => {
    let minifigs = await getMinifigs();
    if (minifigs) {
      let chosenFigs = chooseMinifigs(minifigs);
      setMinifigs(chosenFigs);
    }
  }

  React.useEffect(() => {
    getAndSetMinifigs()
  }, [])

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>CHOOSE YOUR MINIFIG</Text>
        <Carousel items={minifigs} />
        <SimpleButton style={[!minifig ? styles.inactive : null]}
          title='Choose Figure' disabled={!minifig}
          onPress={() => navigation.navigate("Form")} />
      </View>

    </SafeAreaView>
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
  inactive: {
    'backgroundColor': 'grey'
  }
});

const chooseMinifigs = (data) => {
  let chosenFigs = [];
  for (let i = 0; i < 5; i++) {
    let chosenFig = null;
    while (chosenFig === null) {
      let fig = data.results[RandomGenerator(data.count)];
      if (fig.set_img_url && !chosenFigs.find(f => f.set_num === fig.set_num)) {
        chosenFig = fig;
      }
    }
    chosenFigs.push(chosenFig)
  }
  return chosenFigs;
}