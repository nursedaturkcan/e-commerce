import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GetDeals } from '../../service/Service';
import DealCard from '../../components/DealCard';
import Navbar from '../../components/Navbar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { DealApiResponseItem, ProductApiResponseItem } from '../../modals/screens';
const ExpressScreen = () => {
  const [deals, setDeals] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await GetDeals();
      if (data?.data) {
        setDeals(data.data.deals);
      }
      setLoading(false);
    };

    fetchCategories();
  }, []);
  console.log(deals,"deals")
  const renderItem = ({ item }: { item: DealApiResponseItem }) => (
    <View style={styles.cardWrapper}>
      <DealCard
        dealId={item.deal_id}
        dealTitle={item.deal_title}
        dealImg={item.deal_photo}
        dealPrice={item.deal_price}
        listPrice={item.list_price}
        dealBadge={item.deal_badge}
        dealEnd={item.deal_ends_at}
     
      />
    </View>
  );

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Navbar type="onlyBack" />
      
      {loading ? (
        <ActivityIndicator size="large" color={Colors.PRIMARYCOLOR} style={styles.loader} />
      ) : (
        <FlatList
          data={deals}
          keyExtractor={(item) => item.deal_id}
          renderItem={renderItem}
          numColumns={1}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

export default ExpressScreen

const styles = StyleSheet.create({
  title: {
    fontSize: wp("4%"),
    fontWeight: "500",
    marginTop: hp("2.5%")
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("3%")
  },
  discountRate: {
    color: Colors.RED,
    fontWeight: "700",
    fontSize: wp("5%")
  },
  oldPrice: {
    textDecorationLine: "line-through"
  },
  listContainer: {
    marginRight: 20,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cardWrapper: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
})