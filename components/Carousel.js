import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CarouselItem from './CarouselItem';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Carousel = () => {
  return (
    <View style={styles.container}>
      <FlatList data={DATA} 
        renderItem={({item}) => 
          <CarouselItem key={item.id} data={item}/>
        }
      />
    </View>
  )
}

export default Carousel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
