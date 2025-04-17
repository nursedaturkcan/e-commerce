import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BestSellersCardProps } from '../modals/components'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../themes/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import CustomIcon from './CustomIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reduxToolKit/store';
import { toggleFavorite } from '../reduxToolKit/slices/favoriteSlice';

const BestSellersProductCard:React.FC<BestSellersCardProps> = ({productName,productImage,productPrice,productRate,id}) => {

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
  <Image style={styles.productImg} source={{uri:productImage}}/>
  <View style={{gap:8}}>
    <Text style={styles.productName} numberOfLines={3} ellipsizeMode="tail">{productName}</Text>
    <Text style={styles.productPrice} >{productPrice}</Text>
    <Text style={styles.productRate} >Product Rate: {productRate}</Text>
  </View>
  <TouchableOpacity onPress={handleToggleFavorite}style={styles.favIcon}>
  <CustomIcon   name={isFavorited ? 'heart-sharp' : 'heart-outline'}  color={Colors.ORANGE}/>
  </TouchableOpacity>
    </Pressable>
  )
}

export default BestSellersProductCard

const styles = StyleSheet.create({
    container:{
        borderWidth:0.5,
        borderColor:Colors.LIGHTGRAY,
        width:wp("65%"),
        height:hp("40%"),
        padding:15,
        margin:15,
        alignItems:"center",
  

    },
    productImg:{
        width:wp("60%"),
        height:hp("20%"),
        resizeMode:"contain"
    },
    productName:{
        fontSize:wp("4%"),
        color:"gray",
        fontWeight:"500",
        
    },
    productPrice:{
        color:Colors.PRIMARYCOLOR,
        fontWeight:"800",
        fontSize:wp("3.5%")
    },
    productRate:{
        backgroundColor:Colors.ORANGE,
        borderRadius:20,
        padding:10,
        color:"white",
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