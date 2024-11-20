import { Text, View, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View>
      <Text style={{textAlign:"center", padding:20, backgroundColor:"#3385ff", color:"white",fontSize:25}}>Let's get started</Text>
      <Text style={{padding:30,fontSize:18}}>Available Tasks</Text>
      <DoLists/>
    </View>
  );
}
function DoLists(){
  return(<Text>HEllo</Text>)
}
