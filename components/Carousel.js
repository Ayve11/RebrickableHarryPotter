import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CarouselItem from './CarouselItem';


const DATA = [
  {
    id: '1',
    header: 'First Item',
    link: 'https://reactnative.dev/'
  },
  {
    id: '2',
    header: 'Second Item',
  },
  {
    id: '3',
    header: 'Third Item',
  },
  {
    id: '4',
    header: 'Fourth Item',
  },
  {
    id: '5',
    header: 'Fifth Item',
  },
];

const Carousel = () => {
  return (
    <View style={styles.container}>
      <FlatList data={DATA} 
        renderItem={({item}) => 
          <CarouselItem key={item.id} item={item}/>
        }
        horizontal
        pagingEnabled snapToAlignment='center'
        keyExtractor={item => item.id}
        
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
