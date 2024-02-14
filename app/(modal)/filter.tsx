import Colors from '@/constants/Colors'
import { useNavigation } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, ListRenderItem, TouchableOpacity} from 'react-native'
import categories from '@/assets/data/filter.json'
import { Ionicons } from '@expo/vector-icons'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

interface Category{
  name: string;
  count: number;
  checked?: boolean
}
const ItemBox = ()=>(
  <>
  <View style={styles.itemContainer}>
    <TouchableOpacity style={styles.item}>
      <Ionicons name='arrow-down-outline' size={20} color={Colors.medium} />
      <Text style={{flex: 1}}>Sort</Text>
      <Ionicons name='chevron-forward' size={22} color={Colors.primary} />
    </TouchableOpacity>

    <TouchableOpacity style={styles.item}>
      <Ionicons name='fast-food-outline' size={20} color={Colors.medium} />
      <Text style={{flex: 1}}>Hygine rating</Text>
      <Ionicons name='chevron-forward' size={22} color={Colors.primary} />
    </TouchableOpacity>

    <TouchableOpacity style={styles.item}>
      <Ionicons name='pricetag-outline' size={20} color={Colors.medium} />
      <Text style={{flex: 1}}>Offers</Text>
      <Ionicons name='chevron-forward' size={22} color={Colors.primary} />
    </TouchableOpacity>

    <TouchableOpacity style={styles.item}>
      <Ionicons name='nutrition-outline' size={20} color={Colors.medium} />
      <Text style={{flex: 1}}>Dietary</Text>
      <Ionicons name='chevron-forward' size={22} color={Colors.primary} />
    </TouchableOpacity>

  </View>
  <Text style={styles.header}> Categories </Text>
  </>
)

const Filter = ()=> {
  const navagation = useNavigation()
  const [items, setItems]= useState<Category[]> (categories)
  const [selected, setSelected] = useState<Category[]> ([])
  const flexWidth = useSharedValue(0);
  const scale = useSharedValue(0);

  useEffect(() => {
    const hasSelected = selected.length > 0
    const selectedItems = items.filter((item)=> item.checked)
    const newSelected = selectedItems.length >0

    if (hasSelected !== newSelected){
      flexWidth.value = withTiming (newSelected ? 150 : 0) 
      scale.value = withTiming (newSelected ? 1 : 0)
     }
    setSelected(selectedItems)
  }, [items]);

  const handleClearAll = ()=>{
    const updateItems = items.map((item)=>{
        item.checked= false

      return item;;
  })
  setItems(updateItems)
  }

  const animatedStyles = useAnimatedStyle(()=>{
    return {
      width: flexWidth.value,
      opacity: flexWidth.value > 0 ? 1 : 0
    }
  })

  const animatedText = useAnimatedStyle(()=>{
    return {
      transform: [{ scale:scale.value}]
    }
  })

  const renderItem: ListRenderItem<Category> = ({ item, index }) =>{
    return(
      <View style={styles.row}>
        <Text style={styles.itemText}>
          {item.name} ({item.count}) 
        </Text>
        <BouncyCheckbox 
        isChecked={items[index].checked}
        fillColor={Colors.primary}
        unfillColor='#ffff'
        iconStyle={{borderColor: Colors.primary, borderRadius: 4, borderWidth:2}}
        disableBuiltInState
        innerIconStyle={{ borderColor: Colors.primary, borderRadius: 4}}
        onPress={()=>{

          const isChecked = items[index].checked;

          const updateItems = items.map((item)=>{
            if (item.name=== items[index].name){
              item.checked= !isChecked
            }
            return item;
          });
          setItems(updateItems)
         }}
         />
      </View>
    )
    }
    return (
      <View style={styles.container}>
        <FlatList data={items} 
        renderItem={renderItem} ListHeaderComponent={<ItemBox />}/>
        <View style={{height:90}} />

        <View style={styles.footer}>
          <View style={styles.buttonContainer}>

          <Animated.View style={[animatedStyles,styles.buttonOutline]}>
          <TouchableOpacity  onPress={handleClearAll}>
          <Animated.Text style={[animatedText,styles.footerTitle2]} >Clear All</Animated.Text>
          </TouchableOpacity>
          </Animated.View>

          <TouchableOpacity style={styles.fullButton} onPress={()=> navagation.goBack()}>
          <Text style={styles.footerTitle} >Done</Text>
          </TouchableOpacity>

          </View>
        </View>
      </View>
    )
  }
const styles =  StyleSheet.create({
  container:{
    flex: 1,
    marginTop:61,
    backgroundColor: Colors.lightGray,
    padding: 24
  },
  footer:{
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: Colors.lightGray,
    padding: 20,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  buttonContainer:{
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  fullButton:{
    backgroundColor:Colors.primary,  
    padding:10,
    borderRadius: 8,
    alignItems:"center",
    justifyContent:'center',
    flex:1,
    height: 56,
  },
  buttonOutline:{
    borderColor: Colors.primary,
    borderWidth: 1.5,
    borderRadius: 8,
    alignItems:"center",
    justifyContent:'center',
    padding:10,
    height: 56,
  },
  footerTitle:{
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  footerTitle2:{
    color: Colors.primary,
    fontWeight: "700",
    fontSize: 16,
  },
  header:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16
  },
  itemContainer:{
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
    flex: 1,
  },
  item:{
    flexDirection:"row",
    gap: 8,
    alignItems:"center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: Colors.grey
  },
  itemText:{
    flex: 1 
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: "#fff"
  }
})

export default Filter
