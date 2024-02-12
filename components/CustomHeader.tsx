import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View, SafeAreaView, StyleSheet,TextInput,TouchableOpacity,Image } from 'react-native'
import { Link } from 'expo-router'
import BottomSheet from './BottomSheet'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { useRef } from 'react'

const SearchBar = ()=>{
  return(
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons style={styles.searchIcon} name="search" size={20} color={Colors.grey} />
          <TextInput placeholder='Resturants, Eaterys, Goceries' style={styles.input} />
        </View>
      
        <Link href={'/(modal)/filter'} asChild>
          <TouchableOpacity style={styles.optionButton}>
            <Ionicons name="options-outline" size={20} color={Colors.primary}/>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

const CustomHeader =() => {
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const openModal = ()=>{
    bottomSheetRef.current?.present();
  }
    return (
      <SafeAreaView style={styles.safeArea}>
         <BottomSheet ref={bottomSheetRef} />
       <View style={styles.container}> 
        <TouchableOpacity onPress={openModal}>
          <Image style={styles.bike} source={require('@/assets/images/bike.png')}/>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
          <Text style={styles.title}> Delievry Now </Text>
          <View style={styles.locationName}>
            <Text style={styles.subtitle}> San Francisco</Text>
            <Ionicons name='chevron-down-outline' size={20} color={Colors.primary}/>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name='person-outline' size={20} color={Colors.primary} />
        </TouchableOpacity>
       </View> 
       < SearchBar/>
      </SafeAreaView>
    )
  }
const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    height: 100,
    backgroundColor: "#fff",
    padding: 20,
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bike:{
    width: 30,
    height: 30,

  },
  titleContainer:{
    flex:1,
  },
  title:{
    fontSize: 14,
    color:Colors.medium
  },
  subtitle:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  locationName:{
    flexDirection:"row",
    alignItems: "center",
  },
  profileButton:{
    backgroundColor: Colors.lightGray,
    padding: 10,
    borderRadius: 50,
  },
  searchContainer:{
    height:60,
    backgroundColor: "#fff",
  },
  searchSection:{
    flexDirection:"row",
    gap: 10,
    flex: 1,
    paddingHorizontal:20,
    alignItems:"center",
  },
  searchField:{
    flex: 1,
    flexDirection:"row",
    alignItems: "center",
    backgroundColor: Colors.grey,
    borderRadius: 8,
  },
  input:{
    padding: 8,
    color: Colors.mediumDark
  },

  searchIcon:{
    paddingLeft:10,
    color: Colors.medium,
  },
  optionButton:{
    padding: 10,
  },
})


export default CustomHeader


