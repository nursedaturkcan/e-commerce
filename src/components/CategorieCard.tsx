import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { CategorieCardProps } from '../modals/components';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { decode } from 'html-entities';
import Colors from '../themes/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../reduxToolKit/store';

const CategorieCard : React.FC<CategorieCardProps> = ({name, id, onPress}) => {
    const selectedCategory = useSelector((state: RootState) => state.category.selectedCategory);
 if(name && id){
    return (
        <TouchableOpacity 
        style={[
          styles.container, 
          { backgroundColor: selectedCategory === id ? Colors.ORANGE : "white" }
        ]} 
        onPress={onPress}
      >
      
         
          <Text style={[styles.catName,{color:selectedCategory===id ? "white" : "gray"}]}>{decode(name)}</Text> 
        </TouchableOpacity>
      );
 }

};

export default CategorieCard;

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        marginLeft:wp("2%"),
        borderRadius:100,
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        borderColor:Colors.ORANGE,
        
    },
    catImage:{
        width:wp("45%"),
        height:hp("20%")
    },
    catName:{
        fontSize:wp("4%"),
        fontWeight:"400",
        color:"gray"
    }
});
