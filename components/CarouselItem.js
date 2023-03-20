import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CarouselItem = ({data}) => {
  return (
    <View style={styles.card}>
      <Text>{data.title}</Text>
    </View>
  )
}

export default CarouselItem;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10
  },
});
