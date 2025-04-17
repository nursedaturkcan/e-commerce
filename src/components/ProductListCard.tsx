import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BestSellersCardProps, ProductListCardProps } from '../modals/components'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../themes/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import CustomIcon from './CustomIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reduxToolKit/store';
import { toggleFavorite } from '../reduxToolKit/slices/favoriteSlice';
import ProductStar from './ProductStars';
import CustomButton from './CustomButton';

const ProductListCard:React.FC<ProductListCardProps> = ({productName,productImage,productPrice,productRate,id,sales_volume
}) => {

  type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductDetail'>;
  const navigation = useNavigation<NavigationProp>();
  const dispatch=useDispatch();
  const isFavorited = useSelector((state: RootState) =>state.favorite.favoriteItems.find(fav => fav.id === id));
  const handleToggleFavorite = () => {
    dispatch(toggleFavorite({
      id,
      productName,
      productImage,
      productPrice,
    }));
  };


  return (
    <Pressable
    onPress={() => navigation.navigate("ProductDetail", { id })}

    style={styles.container}>
 <View style={styles.productImg}>
 <Image style={{resizeMode:"contain", width:"100%", height:"100%"}} source={{uri:productImage}}/>
 </View>
  <View style={{gap:8}}>
    <Text style={styles.productName} numberOfLines={3} ellipsizeMode="tail">{productName}</Text>
    <Text style={styles.productPrice} >{productPrice}</Text>
   <View style={{flexDirection:"row", alignItems:"center"}}>
   <ProductStar rating={Number(productRate) || 0} color={Colors.STAR} size={20}/>
    <Text style={styles.productRate} > {productRate}</Text>
   </View>
  </View>
  <TouchableOpacity onPress={handleToggleFavorite}style={styles.favIcon}>
  <CustomIcon   name={isFavorited ? 'heart-sharp' : 'heart-outline'}  color={Colors.ORANGE}/>
  </TouchableOpacity>
  <Text style={styles.sales} numberOfLines={3} ellipsizeMode="tail">{sales_volume}</Text>
  <CustomButton title='Add to Cart' onPress={()=>{}} />
    </Pressable>
  )
}

export default ProductListCard

const styles = StyleSheet.create({
    container:{
        borderWidth:0.5,
        borderColor:Colors.LIGHTGRAY,
        width:wp("47%"),
        height:hp("43%"),
        padding:15,
        margin:15,
        alignItems:"center",
  

    },
    productImg:{
        width:wp("40%"),
        height:hp("20%"),
    },
    productName:{
        fontSize:wp("4%"),
        color:"gray",
        fontWeight:"500",
        
    },
    sales:{
        fontSize:wp("3%"),
        color:"gray",
        fontWeight:"500",
        
    },
    productPrice:{
        color:Colors.PRIMARYCOLOR,
        fontWeight:"800",
        fontSize:wp("3.5%")
    },
    productRate:{
        fontWeight:"500",
        textAlign:"center"
    },
    favIcon:{
      position:"absolute",
      right:10,
      top:10,
      borderWidth:1,
      borderRadius:100,
      padding:5,
      borderColor:Colors.LIGHTGRAY,
      zIndex:999
    }
})