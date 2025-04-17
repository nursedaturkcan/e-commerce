import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WidgetHeaderProps } from '../modals/components'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../themes/colors';


const WidgetHeader: React.FC<WidgetHeaderProps> = ({ title, seeAll }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {seeAll && (
                <Text 
                onPress={()=>{}}
                style={styles.seeAll}>See All</Text>
            )}
        </View>
    )
}

export default WidgetHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: wp("5%"),
        paddingVertical: hp("2%")
    },
    title: {
        fontSize: wp("4%"),
        fontWeight: "500",

    },
    seeAll: {
        fontSize: wp("4%"),
        fontWeight: "500",
        color:Colors.PRIMARYCOLOR
    }
})