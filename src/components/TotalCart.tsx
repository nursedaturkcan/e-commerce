import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { RootState } from '../reduxToolKit/store';
import CustomButton from './CustomButton';

const TotalCart = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
  }, []);

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const totalAmount = useMemo(() => {
 const subtotal = cartItems.reduce((acc, item) => {
  const priceStr = typeof item.price === 'string' ? item.price.replace('$', '') : String(item.price);
  const numericPrice = parseFloat(priceStr);
  return acc + (numericPrice * item.quantity);
}, 0);

      
      
  
    const shippingPrice = 20;
    return subtotal + shippingPrice;
  }, [cartItems]);
  

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={['25%']}
      onChange={handleSheetChanges}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text style={styles.totalText}>Total Amount: ${totalAmount.toFixed(2)}</Text>
        <Text style={styles.subText}>Shipping Price : $20</Text>
        <CustomButton title="Buy Now" onPress={()=>{}} />
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});

export default TotalCart;
