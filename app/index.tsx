import { useState } from "react";
import { Text, View , TouchableOpacity, StyleSheet} from "react-native";

export default function Index() {
  const pendingData=["sleep","walk"]
  return (
    <View style={{backgroundColor:"#3b453d",
    height:"100%",
    flexDirection:"col",
    alignItems:"center",
    }}>
      {pendingData.map((res)=>(
        <View style={{textAlign:"center",display:"flex",flexDirection:"row",justifyContent:"space-between",width:300,backgroundColor:"white",padding:10,marginTop:10}}>
          <View style={{width:20,height:20,backgroundColor:"black",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <TouchableOpacity style={{backgroundColor:"white",width:15,height:15,borderRadius:10}}></TouchableOpacity>
          </View>
        <Text>{res}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.container}>
        <Text style={{textAlign:"center"}}>Create New Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:"#edf5ef",
    width:300,
    padding:10,
    justifyContent:"center",
    marginTop:10
  }
})