import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { CustomInputProps } from '../modals/components'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../themes/colors';
import CustomIcon from './CustomIcon';

const CustomInput: React.FC<CustomInputProps> = ({ hasIcon, placeHolder, icon, onChangeText, onIconPress }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeHolder}
                style={styles.inputStyle}
                onChangeText={onChangeText}
            />
            {hasIcon && (
                <TouchableOpacity  onPress={onIconPress}>
                    <CustomIcon name={icon} size={25} color={Colors.PRIMARYCOLOR} />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        width: wp("70%"),
        height: hp("5%"),
        borderRadius: 10,
        backgroundColor: Colors.LIGHTGRAY,
        flexDirection: "row",
        alignItems: "center"
    },
    inputStyle: {
        paddingHorizontal: 10,
        width: wp("60%"),
        height: hp("5%"),
    },
})