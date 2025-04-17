import React from 'react';
import { View, StyleSheet, Text, Image,ScrollView, TouchableOpacity } from 'react-native';
import { ProductVariationsProps } from '../modals/components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../themes/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductDetail'>;
const ProductVariations: React.FC<ProductVariationsProps> = ({ productVariations }) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    >
  <View style={styles.wrapper}>
      {productVariations.map((variation, index) => (

       <TouchableOpacity onPress={() => navigation.push("ProductDetail", { id: variation.asin })}>

          <Image
            source={{ uri: variation.photo
            }} 
            style={styles.image}
            resizeMode="contain"
          />
        
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
    width: wp("15%"),
    height: wp("18%"),
    borderRadius: 10,
    borderColor: Colors.PRIMARYCOLOR,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  image: {
    width: wp("14%"),
    height: wp("17%"),
  },
  label: {
    fontSize: 10,
    marginTop: 4,
    textAlign: 'center',
  },
});

export default ProductVariations;
