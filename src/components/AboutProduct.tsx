import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AboutProductProps } from '../modals/components';



const AboutProduct: React.FC<AboutProductProps> = ({ aboutProduct }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={aboutProduct}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AboutProduct;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 4,
  },
  bullet: {
    marginRight: 8,
    fontSize: 16,
    lineHeight: 20,
  },
  text: {
    fontSize: 14,
    color: '#333',
    flexShrink: 1,
  },
});
