import { StyleSheet, Text, View ,SafeAreaView, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../reduxToolKit/store'
import Navbar from '../../components/Navbar'
import { FavoriteItem as FavoriteItemType } from '../../modals/slices'
import TotalCart from '../../components/TotalCart'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import FavoriteProductCard from '../../components/FavoriteProductCard'
import SwipeableItem, {
  useSwipeableItemParams,
} from "react-native-swipeable-item";
import Colors from '../../themes/colors'
import CustomIcon from '../../components/CustomIcon'


const FavoriteScreen:React.FC = () => {
  const favoriteItems = useSelector((state: RootState) => state.favorite.favoriteItems);
  const UnderlayLeft = () => {
    return (
      <View style={[styles.row, styles.underlayLeft]}>
        <TouchableOpacity onPress={() => {}}>
        <CustomIcon name='cart' size={30} color={Colors.PRIMARYCOLOR}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{}}>
        <CustomIcon name='trash' size={30} color={Colors.PRIMARYCOLOR} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderItem = ({ item }: { item: FavoriteItemType }) => (
    <SwipeableItem
    item={item}
    renderUnderlayLeft={() => <UnderlayLeft />}
    snapPointsLeft={[150]}
    >
        <FavoriteProductCard
    productName={item.productName ?? ""}
    productPrice={item.productPrice ?? ""}
    onPress={() => console.log("fav item tıklandı")}
    productImage={item.productImage ?? ""}
    id={item.id}
  />
      </SwipeableItem>
  
  );
  return (
    <GestureHandlerRootView>
  <SafeAreaView style={{ flex: 1 }}>
      <Navbar type="onlyBack" />

      <FlatList
        data={favoriteItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        
      />
    </SafeAreaView>
    </GestureHandlerRootView>
 
 
  );
}

export default FavoriteScreen

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 20, 
  },
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap:10,
    padding: 15,
  },
  underlayLeft: {
    flex: 1,
    justifyContent: "flex-end",
  },
})