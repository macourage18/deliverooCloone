import Colors from '@/constants/Colors'
import { useNavigation } from 'expo-router'
import React, { useState }  from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MapView from 'react-native-maps'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

// 

const LocationSearch = ()=> {
  const navagation = useNavigation()
  const [location, setLocation] = useState({
    latitude: 4.815554,
    longitude: 7.049844,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  })
    return (
      <View style={{flex:1}}>
        <GooglePlacesAutocomplete 
        placeholder='search' 
        onPress={(data, details = null) =>{
          console.log(data,details)
        }} 
        query={{
          key: 'process.env.EXPO_PUBLIC_GOOGLE_API_KEY',
          language: 'en',
        }}
      />

       

        <MapView showsUserLocation={true} style={styles.map} region={location} />

        <View style={styles.absoluteBox}>
          <TouchableOpacity style={styles.button} onPress={()=>{
            navagation.goBack()
          }}>
            <Text style={styles.buttonTex}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    map:{
      flex:1,
    },
    absoluteBox:{
      position:'absolute',
      bottom: 20,
      width:'100%',
    },
    button:{
      backgroundColor: Colors.primary,
      padding: 16,
      margin: 16,
      alignItems: 'center',
      borderRadius: 8,
    },
    buttonTex:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  })

export default LocationSearch
