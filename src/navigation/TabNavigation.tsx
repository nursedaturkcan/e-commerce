import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomIcon from '../components/CustomIcon';
import HomeScreen from '../screens/tabScreens/HomeScreen';
import ProfileScreen from '../screens/tabScreens/ProfileScreen';
import ExpressScreen from '../screens/tabScreens/ExpressScreen';
import FavoriteScreen from '../screens/tabScreens/FavoriteScreen';
import CartScreen from '../screens/tabScreens/CartScreen';
import { CARTSCREEN, EXPRESSSCREEN, FAVORITESSCREEN, HOMESCREEN, PROFILESCREEN } from '../utils/tabRoutesName';
import Colors from '../themes/colors';
import { TabStackParamList } from './types';
import { useSelector } from 'react-redux';
import { RootState } from '../reduxToolKit/store';



const Tab = createBottomTabNavigator<TabStackParamList>();



const TabNavigation: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const uniqueItemsCount = cartItems.reduce((acc: string[], item) => { 
        if (!acc.includes(item.id)) {
          acc.push(item.id);
        }
        return acc;
      }, []).length;
      
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarActiveTintColor: Colors.PRIMARYCOLOR,
                tabBarInactiveTintColor: "gray",
                headerShown: false,
            }}
        >
            <Tab.Screen
                name={HOMESCREEN}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <CustomIcon
                            name={focused ? "home" : "home-outline"}
                            size={25}
                            color={focused ? Colors.PRIMARYCOLOR : "gray"} />
                    ),
                }}
            />
            <Tab.Screen
                name={EXPRESSSCREEN}
                component={ExpressScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <CustomIcon
                            name={focused ? "business" : "business-outline"}
                            size={25}
                            color={focused ? Colors.PRIMARYCOLOR : "gray"} />
                    ),


                }}
            />
            <Tab.Screen
                name={FAVORITESSCREEN}
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <CustomIcon
                            name={focused ? "heart" : "heart-outline"}
                            size={25}
                            color={focused ? Colors.PRIMARYCOLOR : "gray"} />
                    ),

                }}
            />
            <Tab.Screen
                name={CARTSCREEN}
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <CustomIcon
                                name={focused ? "cart" : "cart-outline"}
                                size={25}
                                color={focused ? Colors.PRIMARYCOLOR : "gray"} />
                                     {uniqueItemsCount > 0 && (
                <View
                  style={{
                    position: 'absolute',
                    top: -4,
                    right: -4,
                    backgroundColor: 'red',
                    borderRadius: 10,
                    width: 18,
                    height: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 12 }}>
                    {uniqueItemsCount}
                  </Text>
                </View>
              )}

                        </>
                    ),

                }}
            />
            <Tab.Screen
                name={PROFILESCREEN}
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <CustomIcon
                            name={focused ? "person" : "person-outline"}
                            size={25}
                            color={focused ? Colors.PRIMARYCOLOR : "gray"} />
                    ),

                }}
            />
        </Tab.Navigator>
    );
};


export default TabNavigation

const styles = StyleSheet.create({})