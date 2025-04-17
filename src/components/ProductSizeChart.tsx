import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ProductSizeChartProps } from '../modals/components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../themes/colors';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSize } from '../reduxToolKit/slices/cartSlice';
import { RootState } from '../reduxToolKit/store';

const ProductSizeChart: React.FC<ProductSizeChartProps> = ({ productSizes }) => {
  const dispatch=useDispatch()
const selectedSize = useSelector((state: RootState) => state.cart.selectedSize);
  const handleSelectSize = (size: string) => {
    dispatch(setSelectedSize(size))
  };
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.wrapper}>
        {productSizes.map((size, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.container,
              selectedSize === size.value && { backgroundColor: Colors.PRIMARYCOLOR },
            ]}
            onPress={() => size.is_available && handleSelectSize(size.value)}
          >
            <Text style={[styles.sizeText,  selectedSize === size.value && { color: "white" },]}>{size.value}</Text>

            {size.is_available === false && <View style={styles.line}></View>}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    gap: 8,
    padding: 8,
  },
  container: {
    borderWidth: 1,
    width: wp('18%'),
    height: wp('10%'),
    borderRadius: 10,
    borderColor: Colors.PRIMARYCOLOR,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  sizeText: {
    fontSize: 10,
    color: 'black',
  },
  line: {
    width: wp('18%'),
    borderWidth: 1,
    position: 'absolute',
    borderColor: 'gray',
  },
});


export default ProductSizeChart
