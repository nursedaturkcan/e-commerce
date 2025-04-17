import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { GetCategories } from '../service/Service';
import CategorieCard from '../components/CategorieCard';
import WidgetHeader from '../components/WidgetHeader';
import { useDispatch } from 'react-redux';
import { setCategory } from '../reduxToolKit/slices/categorySlice';

const Categories: React.FC = () => {
  const dispatch=useDispatch();
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await GetCategories();
      if (data?.data) {
        setCategories(data.data);
      }
      setLoading(false);
    };

    fetchCategories();
  }, []);
  if (loading) {
    return <ActivityIndicator size="small" color="#F0396B" />;
  }

  return (
  <>
    <WidgetHeader title='Categories' seeAll={true}/>
    <FlatList
    style={{backgroundColor:"white"}}
      data={categories}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <CategorieCard name={item.name} id={item?.id}   onPress={() => dispatch(setCategory(item.id))} />
      )}
      ListEmptyComponent={<ActivityIndicator size="small" color="#F0396B" />}
    />
  </>
  );
};

export default Categories;

const styles = StyleSheet.create({});
