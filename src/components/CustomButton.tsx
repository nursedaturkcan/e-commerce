import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../themes/colors';
import { CustomButtonProps } from '../modals/components';




const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )


}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        marginTop:hp("2%"),
        marginBottom: hp("8%"),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: Colors.PRIMARYCOLOR,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width:wp("47%")


    },
    title: {
        fontSize: wp("4%"),
        fontWeight: "500",
        color:"white"
    },

})
