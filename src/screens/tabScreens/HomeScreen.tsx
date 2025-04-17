import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Navbar from '../../components/Navbar'
import WidgetHeader from '../../components/WidgetHeader'
import Categories from '../../widgets/Categories'
import BestSellers from '../../widgets/BestSellers'


const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
      <Navbar type='home' />
      <ScrollView>
        <Categories />
        <BestSellers />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})