import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import React  from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ModalHeader = ()=> {
  const navagation = useNavigation()
    return (
      <SafeAreaView style={styles.safeAre2}>
         <View style={styles.header}>
        <TouchableOpacity style={styles.headerContanier} onPress={()=>{
          navagation.goBack
        }}>
          <Ionicons  name='close-outline' size={28} color={Colors.primary} />
          <Text style={styles.headerTitle}> Filter </Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  safeAre2:{
    flex: 1,
    backgroundColor: "#fff"
  },
  header:{
    height: 60,
    paddingHorizontal: 20, 
    backgroundColor: "#fff",
  },
  headerContanier:{
    flexDirection: "row",
    alignItems:"center",
  },
  headerTitle:{
    flex:1,
    fontSize: 20,
    color: Colors.mediumDark,
  }

})
export default ModalHeader
