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
        <TouchableOpacity style={styles.close} onPress={()=>{
          navagation.goBack()
        }}>
          <Ionicons  name='close-outline' size={28} color={Colors.primary} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}> Filter </Text>
        </View>
      </View>
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  safeAre2:{
    flex: 1,
    backgroundColor: Colors.medium,
    color: Colors.medium
  },
  header:{
    height: 60,
    paddingHorizontal: 20, 
    backgroundColor: Colors.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
  },
  close:{
    padding: 4,
  },
  titleContainer:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  headerTitle:{
    fontSize: 20,
    fontWeight:'bold',
    color: Colors.mediumDark,
  }

})
export default ModalHeader
