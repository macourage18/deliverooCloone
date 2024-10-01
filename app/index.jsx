import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"

const index = ()=>{
  return(
    <GestureHandlerRootView style={{flex:1}}>
    <View style ={styles.cont}>
      <Text></Text>
    </View>
    </GestureHandlerRootView>
    
  )
}



const styles = StyleSheet.create({
  cont:{
    marginTop: 30,
  }
})


export default index