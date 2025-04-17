import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, View, StyleSheet } from 'react-native';
import { GetBestSellers } from '../service/Service';
import BestSellersProductCard from '../components/BestSellersProductCard';
import WidgetHeader from '../components/WidgetHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../reduxToolKit/store';

const BestSellers: React.FC = () => {
    const selectedCategory = useSelector((state: RootState) => state.category.selectedCategory);
    const [bestSellers, setBestSellers] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchBestSellers = async () => {
            const data = await GetBestSellers({
                category: selectedCategory,
                type: 'BEST_SELLERS',
                page: '1',
                country: 'US'
            });
            if (data?.data?.best_sellers) {
                setBestSellers(data.data.best_sellers);
            }
            setLoading(false);
        };

        fetchBestSellers();
    }, [selectedCategory]);

    if (loading) {
        return <ActivityIndicator size="small" color="#F0396B" />;
    }

    return (
        <>
            <WidgetHeader title='Best Sellers' seeAll={true} />
            <FlatList
                style={{ backgroundColor: "white", marginBottom: 20 }}
                data={bestSellers}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <BestSellersProductCard productImage={item.product_photo} productName={item.product_title} productPrice={item.product_price} productRate={item.product_num_ratings} id={item.asin} />
                )}
                ListEmptyComponent={<ActivityIndicator size="small" color="#F0396B" />}
            />
        </>
    );
};

export default BestSellers;

const styles = StyleSheet.create({});
