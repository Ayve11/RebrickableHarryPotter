import * as React from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import CarouselItem from './CarouselItem';

const {width} = Dimensions.get('window');

const Carousel = ({items}) => {
  return (
    <View style={styles.container}>
      <FlatList data={items} 
        renderItem={({item}) => 
          <CarouselItem item={item}/>
        }
        horizontal
        pagingEnabled snapToAlignment='center'
        keyExtractor={item => item.name}
      />
    </View>
  )
}

export default Carousel;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // textAlign: 'center',
    // verticalAlign: 'center',
    // alignContent: 'center',
    height: width
    // flexDirection: 'row'
  },
});
