import * as React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { WebviewContext } from '../contexts/WebviewContext';


const {width} = Dimensions.get('window');
const ITEM_LENGTH = width * 0.8; // Item is a square. Therefore, its height and width are of the same length.

const CarouselItem = ({item}) => {
  const {setUrl} = React.useContext(WebviewContext);
  return (
    <View style={styles.itemContent}>
      <Image source={item.imageSrc} style={styles.itemImage}/>
      <Text style={styles.itemText}>{item.header}</Text>
      <Text style={styles.itemLink} onPress={() => setUrl(item.link)}>Show details</Text>
    </View>
  )
}

export default CarouselItem;

const styles = StyleSheet.create({
  itemContent: {
    marginHorizontal: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    width: ITEM_LENGTH,
    height: ITEM_LENGTH,
    justifyContent: 'center'
  },
  itemImage: {
    width: '50%',
    height: '50%',
    resizeMode: 'cover',
  },
  itemText: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20
  },
  itemLink: {
    color: 'orange',
    fontSize: 15,
    fontWeight: '600',
  }
});
