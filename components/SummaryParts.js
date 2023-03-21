import { Text, View } from "react-native";
import SummaryPartsItem from "./SummaryPartsItem";


export default function SummaryParts({parts}) {

  return (
    <View>
      <Text>There are {parts.length} parts in this minifig</Text>
      <View>
        {parts.map((item) => <SummaryPartsItem key={item.part.name} item={item.part}/>)}
      </View>
    </View>
  )
}
