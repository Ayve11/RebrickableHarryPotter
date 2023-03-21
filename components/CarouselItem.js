import * as React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { BasketContext } from '../contexts/BasketContext';
import { WebviewContext } from '../contexts/WebviewContext';


const {width} = Dimensions.get('window');
const ITEM_LENGTH = width * 0.8; 

const CarouselItem = ({item}) => {
  const {setUrl} = React.useContext(WebviewContext);
  const {minifig, setMinifig} = React.useContext(BasketContext);
  
  const handlePress = () => {
    if(minifig?.setNum !== item.set_num){
      setMinifig(item);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.itemContent].concat(minifig?.set_num === item.set_num ? [styles.shadow] : [])}>
        <Image source={{uri: item.set_img_url}} style={styles.itemImage}/>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemLink} onPress={() => setUrl(item.set_url)}>Show details</Text>
      </View>
    </TouchableWithoutFeedback>
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
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 10,
    borderColor: 'white'
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
  itemLink: {
    color: 'orange',
    fontSize: 15,
    fontWeight: '600',
  },
  shadow: {
    shadowColor: 'orange',
    shadowOpacity: 1,
    shadowRadius: 13.16,
    elevation: 15,
    borderColor: 'orange',
    borderWidth: 10
  }
});
