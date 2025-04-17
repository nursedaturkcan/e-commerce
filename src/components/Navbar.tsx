import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NavbarProps } from '../modals/components'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomInput from './CustomInput';
import CustomIcon from './CustomIcon';
import Colors from '../themes/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';



const Navbar: React.FC<NavbarProps> = ({ type }) => {
    type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;
    const navigation = useNavigation<NavigationProps>();
    const [query, setQuery] = useState('');

    const handleSearchPress = () => {
        if (query.trim().length > 0) {
          navigation.navigate("ProductListPage", { query });
        }
      };

    if (type === "home") {
        return (
            <View style={styles.container}>
                <CustomInput    onIconPress={handleSearchPress}   onChangeText={(text) => setQuery(text)} hasIcon={true} placeHolder='Search products...' icon='search' />
                <View style={styles.iconsWrapper}>
                    <TouchableOpacity style={styles.badgeWrapper}>
                        <Text style={styles.badge}>2</Text>
                        <CustomIcon name='mail-outline' size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.badgeWrapper}>
                        <Text style={styles.badge}>1</Text>
                        <CustomIcon name='notifications' color={Colors.PRIMARYCOLOR} size={30} />
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
    if (type === "onlyBack") {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.badgeWrapper}>
                    <CustomIcon name='chevron-back-circle-sharp' color={Colors.PRIMARYCOLOR} size={30} />
                </TouchableOpacity>
            </View>
        )
    }

}

export default Navbar

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: wp("5%"),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    iconsWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: wp("20%")
    },
    badgeWrapper: {
        alignItems: "center",
        justifyContent: "center"
    },
    badge: {
        position: "absolute",
        top: -7,
        left: 25,
        backgroundColor: Colors.ORANGE,
        color: "white",
        borderRadius: 50,
        width: wp("4%"),
        zIndex: 999,
        paddingLeft: 4

    }
})