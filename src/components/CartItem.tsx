import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { CartItemProps, CategorieCardProps } from '../modals/components';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { decode } from 'html-entities';
import Colors from '../themes/colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reduxToolKit/store';
import { addToCart, decreaseQuantity } from '../reduxToolKit/slices/cartSlice';

const CartItem: React.FC<CartItemProps> = ({ title, id, onPress, quantitiy, price, selectedSize, photo }) => {
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(addToCart({ id, title, price, photo, selectedSize, quantity: 1 }));
    };


    const handleDecrease = () => {
        dispatch(decreaseQuantity(id));
    };
    return (
        <View style={styles.container} >

            <View style={styles.wrapper}>
                <Image source={{ uri: photo }} style={styles.productPhoto} />
                <View style={styles.info}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{price}</Text>
                    <Text>Size :{selectedSize}</Text>
                    <View style={styles.quantitiy}>
                        <TouchableOpacity onPress={handleDecrease} style={styles.btn}>
                            <Text style={styles.btnText}>-</Text>
                        </TouchableOpacity>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>{quantitiy}</Text>
                        </View>
                        <TouchableOpacity onPress={handleIncrease} style={styles.btn} >
                            <Text style={styles.btnText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
}



export default CartItem;

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    wrapper: {
        width: wp("90%"),
        height: hp("24%"),
        flexDirection: "row",
    },
    productPhoto: {
        width: wp("40%"),
        height: hp("20%"),
        resizeMode: "contain",
    },
    info: {
        width: wp("50%"),
        gap:10,
        marginLeft:10
    },
    title: {
        fontSize: wp("4%"),
        flexWrap: "wrap"
    },
    price:{
        fontWeight:"500"
    },
    quantitiy: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: wp("30%"),
        gap: 10
    },
    btn: {
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderColor: "#ccc"

    },
    btnText: {
        fontSize: wp("5%"),
        fontWeight: "500"
    },
});
