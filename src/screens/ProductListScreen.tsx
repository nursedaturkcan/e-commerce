import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductApiResponseItem } from '../modals/screens'
import { useRoute } from '@react-navigation/native';
import { SearchProducts } from '../service/Service';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../components/Navbar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../themes/colors';
import ProductListCard from '../components/ProductListCard';
import SortButton from '../components/SortButton';
import FilterButton from '../components/FilterButton';
const ProductListPage: React.FC = () => {
  const route = useRoute<any>();
  const query = route.params?.query || '';
  const [products, setProducts] = useState<ProductApiResponseItem[]>([]);
  const [productCondition, setProductCondition] = useState('ALL');
  const [selectedSort, setSelectedSort] = useState('LOWEST_PRICE');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchQuery = async () => {
      setLoading(true); 
      try {
        const data = await SearchProducts({
          query,
          page: '1',
          product_condition: productCondition,
          sort_by: selectedSort,
        });
        if (data) {
          setProducts(data.data.products);
        }
      } catch (error) {
        console.error("API error:", error);
      } finally {
        setLoading(false); 
      }
    };

    if (query) {
      fetchSearchQuery();
    }
  }, [query, productCondition, selectedSort]);
  
 

  const renderItem = ({ item }: { item: ProductApiResponseItem }) => (
    <View style={styles.cardWrapper}>
      <ProductListCard
        id={item.asin}
        sales_volume={item.sales_volume}
        productImage={item.product_photo}
        productName={item.product_title}
        productPrice={item.product_price}
        productRate={Number(item.product_star_rating) || 0}
      />
    </View>
  );

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Navbar type="onlyBack" />
      <SortButton selectedSort={selectedSort} onChange={setSelectedSort} />
      <FilterButton selectedCondition={productCondition} onChange={setProductCondition} />
      
      {loading ? (
        <ActivityIndicator size="large" color={Colors.PRIMARYCOLOR} style={styles.loader} />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.asin}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};







export default ProductListPage

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