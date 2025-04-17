import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductDetailProps } from '../modals/screens'
import { RouteProp, UNSTABLE_UnhandledLinkingContext, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { GetProductDetail } from '../service/Service';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomCarousel from '../components/CustomCarousel';
import Navbar from '../components/Navbar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ProductStar from '../components/ProductStars';
import Colors from '../themes/colors';
import CustomIcon from '../components/CustomIcon';
import { discountRate } from '../utils/functions';
import AboutProduct from '../components/AboutProduct';
import ProductProperties from '../components/ProductProperties';
import ProductVariations from '../components/ProductVariations';
import ProductSizeChart from '../components/ProductSizeChart';
import CustomButton from '../components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../reduxToolKit/slices/cartSlice"
import { RootState } from '../reduxToolKit/store';




type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;
const ProductDetailScreen: React.FC<ProductDetailProps> = () => {
    const route = useRoute<ProductDetailRouteProp>();
    const { id } = route.params;
    const selectedSize = useSelector((state: RootState) => state.cart.selectedSize);

    const [productDetail, setProductDetail] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchBestSellers = async () => {
            const data = await GetProductDetail({
                asin: id,
                country: 'US'
            });
            if (data?.data) {
                setProductDetail(data.data);
            }
            setLoading(false);
        };

        fetchBestSellers();
    }, [id]);
    if (productDetail) {


        return (
            <SafeAreaView>
                <Navbar type={"onlyBack"} />
                <ScrollView>
                    <CustomCarousel images={productDetail.product_photos} />
                    <View style={{ paddingHorizontal: 10, gap: 10 }}>
                        <Text style={styles.title}>
                            {productDetail.product_title}
                        </Text>
                        <View style={styles.rating}>
                            <Text>{productDetail.product_star_rating}</Text>
                            <ProductStar size={17} color={Colors.STAR} rating={productDetail.product_star_rating} />
                            <Text>|</Text>
                            <Text>{productDetail?.user_uploaded_videos?.length
                            } Customer Review</Text>
                            <CustomIcon name='camera' size={20} />
                        </View>
                        <Text style={{ fontWeight: "500", color: Colors.PRIMARYCOLOR, fontSize: wp("3.5%") }}>{productDetail.product_byline
                        }</Text>
                        <Text >{productDetail.sales_volume}</Text>
                        <View style={styles.rating}>
                            <Text style={[styles.discountRate, { color: "black" }]}>
                                {productDetail.product_price}$
                            </Text>
                            {productDetail?.product_price && productDetail?.product_original_price && (
                                <Text style={styles.discountRate}>
                                    -{discountRate(productDetail.product_original_price, productDetail.product_price)}%
                                </Text>
                            )}

                            {productDetail?.product_price && productDetail?.product_original_price && (
                                <>
                                    {discountRate(productDetail.product_original_price, productDetail.product_price) > 0 && (
                                        <Text style={styles.oldPrice}>Was: {productDetail.product_original_price}</Text>
                                    )}
                                </>
                            )}

                        </View>
                        {productDetail.product_details && (
                            <>
                                <Text style={[styles.title, { color: Colors.ORANGE, fontWeight: "800" }]}>
                                    Product Details
                                </Text>
                                <ProductProperties productProperties={productDetail.product_details} />
                            </>
                        )}

                        {productDetail?.product_variations?.color && (
                            <>
                                <Text>Colors:</Text>
                                <ProductVariations productVariations={productDetail?.product_variations?.color} />

                            </>
                        )}
                        {productDetail?.product_variations?.size && (
                            <>
                                <Text>Size:</Text>
                                <ProductSizeChart productSizes={productDetail?.product_variations?.size} />

                            </>
                        )}
                        <Text style={[styles.title, { color: Colors.ORANGE, fontWeight: "800" }]}>
                            About This Item
                        </Text>
                        <AboutProduct aboutProduct={productDetail.about_product} />
                    </View>
                    <CustomButton
                        title='Add to Basket'
                        onPress={() => {
                            if (productDetail?.product_variations?.size && !selectedSize) {
                                Alert.alert("Please select size");
                                return;
                            }

                            dispatch(addToCart({
                                id: productDetail.asin,
                                title: productDetail.product_title,
                                price: productDetail.product_price,
                                photo:productDetail.product_photo,
                                quantity: 1,
                                selectedSize: selectedSize,
                            }));
                        }}
                    />

                </ScrollView>

            </SafeAreaView>
        )
    } else {
        <Text>No product...</Text>
    }

}

export default ProductDetailScreen

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
})