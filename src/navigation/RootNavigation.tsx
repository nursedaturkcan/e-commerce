import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TabNavigation from './TabNavigation';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductListPage from '../screens/ProductListScreen';

const Stack = createNativeStackNavigator();


const  RootNavigation:React.FC=()=> {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="ProductListPage" component={ProductListPage} />
     
    </Stack.Navigator>
  );
}
export default RootNavigation;