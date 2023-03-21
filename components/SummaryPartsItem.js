import { Image, StyleSheet, Text, View } from "react-native";

export default function SummaryPartsItem({item}) {
  return (
    <View style={styles.itemContent}>
        <Image source={{uri: item.part_img_url}} style={styles.itemImage}/>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemText}>{item.name}</Text>      
          <Text style={styles.itemDescription}>{item.part_num}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    paddingVertical: 5
  },
  itemImage: {
    width: '25%',
    resizeMode: 'contain',
  },
  itemText: {
    fontSize: 14,
    fontWeight: '600',
  },
  itemDescription: {
    color: 'orange',
    fontSize: 13,
    fontWeight: '600',
  },
  itemTextContainer: {
    width: '70%',
    margin: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  }
});