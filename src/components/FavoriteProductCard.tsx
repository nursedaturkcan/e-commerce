import React, { FC } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FavoriteProductCartProps } from '../modals/components';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SwipeableItem from 'react-native-swipeable-item'


const FavoriteProductCard: React.FC<FavoriteProductCartProps> = ({ productImage, id, onPress, productName, productPrice }) => {

    return (
            <View style={styles.container} >

                <View style={styles.wrapper}>
                    <Image source={{ uri: productImage }} style={styles.productPhoto} />
                    <View style={styles.info}>
                        <Text style={styles.title}>{productName}</Text>
                        <Text style={styles.price}>{productPrice}</Text>

                    </View>
                </View>

            </View>
    );
}



export default FavoriteProductCard;

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    wrapper: {
        width: wp("90%"),
        height: hp("20%"),
        flexDirection: "row",
    },
    productPhoto: {
        width: wp("40%"),
        height: hp("20%"),
        resizeMode: "contain",
    },
    info: {
        width: wp("50%"),
        gap: 10,
        marginLeft: 10,
        marginTop: 30
    },
    title: {
        fontSize: wp("4%"),
        flexWrap: "wrap"
    },
    price: {
        fontWeight: "500"
    },

});
