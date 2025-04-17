import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BestSellersCardProps, DealCardProps } from '../modals/components'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../themes/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from '../utils/functions';
import CustomButton from './CustomButton';
import { addToCart } from '../reduxToolKit/slices/cartSlice';

const DealCard: React.FC<DealCardProps> = ({ dealBadge, dealEnd, dealId, dealImg, dealPrice, dealTitle, listPrice }) => {

    type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductDetail'>;
    const navigation = useNavigation<NavigationProp>();
    const dispatch = useDispatch();


    return (
        <Pressable
            onPress={() => navigation.navigate("ProductDetail", { id: dealId })}

            style={styles.container}>
            <Image style={styles.productImg} source={{ uri: dealImg }} />
            <View style={{ gap: 8 }}>
                <Text style={styles.productName} numberOfLines={3} ellipsizeMode="tail">{dealTitle}</Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <Text style={styles.productPrice} >${dealPrice?.amount}</Text>
                    <Text style={styles.oldPrice} >${listPrice?.amount}</Text>
                </View>
            </View>
            <Text style={styles.date} >End At:{formatDate(dealEnd)} </Text>
            <Text style={styles.productRate} >{dealBadge} </Text>
            <CustomButton
                title='Add to Basket'
                onPress={() => {
                    dispatch(addToCart({
                        id: dealId,
                        title: dealTitle,
                        price: dealPrice.amount,
                        photo: dealImg,
                        quantity: 1,

                    }));
                }}
            />
        </Pressable>
    )
}

export default DealCard

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderColor: Colors.LIGHTGRAY,
        width: wp("90%"),
        height: hp("45%"),
        padding: 15,
        margin: 15,
        alignItems: "center",
    },
    productImg: {
        width: wp("80%"),
        height: hp("20%"),
        resizeMode: "contain"
    },
    productName: {
        fontSize: wp("4%"),
        color: "gray",
        fontWeight: "500",

    },
    productPrice: {
        color: Colors.ORANGE,
        fontWeight: "800",
        fontSize: wp("3.8%")
    },
    oldPrice: {
        color: "BLACK",
        fontWeight: "500",
        fontSize: wp("3.5%"),
        textDecorationLine: "line-through"
    },
    productRate: {
        backgroundColor: Colors.ORANGE,
        borderRadius: 20,
        padding: 10,
        color: "white",
        fontWeight: "500",
        textAlign: "center",
        width: wp("20%"),
        position: "absolute",
        top: 10,
        right: 10
    },
    date: {
        color: "gray",
        fontWeight: "500",
        fontSize: wp("3.5%"),
        alignSelf: "flex-start",
        marginTop: 20
    }

})