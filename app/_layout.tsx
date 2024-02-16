
import { Stack, useNavigation } from 'expo-router';
import CustomHeader from '@/components/CustomHeader';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Colors from '@/constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';



export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};



export default function RootLayoutNav() {
  const navagation = useNavigation()
  return (
    <BottomSheetModalProvider>
      <Stack >
        <Stack.Screen 
        name="index" 
        options={{
          header: ()=> <CustomHeader />
        }} 
        />
        
      <Stack.Screen name='(modal)/filter' 
      options={{
        presentation: 'modal', 
        headerTitle: 'Filter',
        headerStyle: {
          backgroundColor: Colors.lightGray,
        },
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity style={{padding: 10,}} onPress={()=>{
            navagation.goBack()
            }}>
              <Ionicons name='close-outline' size={28} color={Colors.primary} />
          </TouchableOpacity>
        )
      }}
       />
       <Stack.Screen name='(modal)/location-search'
       options={{
        presentation: 'fullScreenModal',
        headerTitle: 'Select Location',
        headerStyle: {
          backgroundColor: Colors.lightGray,
        },
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity style={{padding: 10,}} onPress={()=>{
            navagation.goBack()
            }}>
              <Ionicons name='close-outline' size={28} color={Colors.primary} />
          </TouchableOpacity>
        )
       }}/>
      </Stack>
      </BottomSheetModalProvider>
  );
}