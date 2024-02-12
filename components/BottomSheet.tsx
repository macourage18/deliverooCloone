import Colors from '@/constants/Colors';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { Link } from 'expo-router';
import React, { forwardRef, useCallback, useMemo } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export type Ref = BottomSheetModal;

 const BottomSheet =forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo (()=> ['50%'], [])
  const renderBackdrop = useCallback((props: any)=> 
  <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1}{
    ...props
  } />, [])
  const {dismiss} = useBottomSheetModal();
    return (
      <BottomSheetModal handleIndicatorStyle={{display:"none"}} 
      backgroundStyle={{ borderRadius: 0,backgroundColor: Colors.lightGray}} overDragResistanceFactor={0}
      ref={ref} 
      snapPoints={snapPoints} backdropComponent={renderBackdrop}>
        <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.activeText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleInactive}>
            <Text style={styles.inactiveText}>Pickup</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subHeader}>Your Location</Text>
        <Link href={"/"} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons name='location-outline' size={20} color={Colors.medium} />
              <Text style={{flex: 1}}>Current Location</Text>
              <Ionicons name='chevron-forward' size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>
        </Link>
        <Text style={styles.subHeader}>Arrival time</Text>
        <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons name='stopwatch-outline' size={20} color={Colors.medium} />
              <Text style={{flex: 1}}>Now</Text>
              <Ionicons name='chevron-forward' size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=> dismiss()}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
    )
  });

const styles = StyleSheet.create({
  contentContainer:{
    flex:1,

  },
  toggle:{
    flexDirection:"row",
    justifyContent:"center",
    gap: 10,
    marginBottom:30,
  },
  toggleActive:{
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  activeText:{
    color: "#fff",
    fontWeight: '700',
  },
  toggleInactive:{
    // backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  inactiveText:{
    color: Colors.primary,
    fontWeight: '700',
  },
  subHeader:{
    fontSize: 16,
    fontWeight:'600',
    margin: 16,
  },
  button:{
    backgroundColor:Colors.primary,
    padding: 16,
    borderRadius:4,
    margin: 16,
    alignItems: "center",
  },
  buttonText:{
    color: "#fff",
    fontWeight: "bold",
  },
  item:{
    flexDirection:"row",
    gap: 8,
    alignItems:"center",
    backgroundColor: "#fff",
    padding: 10,
    borderColor: Colors.medium,
    borderWidth: 1
  },
})

export default BottomSheet
