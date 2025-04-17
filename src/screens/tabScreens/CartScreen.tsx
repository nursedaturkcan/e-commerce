import { StyleSheet, Text, View ,SafeAreaView, FlatList} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../reduxToolKit/store'
import Navbar from '../../components/Navbar'
import CartItem from '../../components/CartItem'
import { CartItem as CartItemType } from '../../modals/slices'
import TotalCart from '../../components/TotalCart'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


const CartScreen:React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const renderItem = ({ item }: { item: CartItemType }) => (
    <CartItem
      title={item.title}
      price={item.price}
      quantitiy={item.quantity}
      selectedSize={item.selectedSize}
      onPress={() => console.log("CartItem tıklandı")}
      photo={item.photo}
      id={item.id}
    />
  );
  return (<GestureHandlerRootView>
   <SafeAreaView style={{ flex: 1 }}>
      <Navbar type="onlyBack" />

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        
      />
      <TotalCart/>
    </SafeAreaView>
  </GestureHandlerRootView>
 
  );
}

export default CartScreen

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 20, 
  },
})