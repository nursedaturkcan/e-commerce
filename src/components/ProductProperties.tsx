import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProductPropertiesProps } from '../modals/components';

const ProductProperties: React.FC<ProductPropertiesProps> = ({ productProperties }) => {

const formatKey = (key: string) => {
    return key
      .replace(/_/g, ' ')                 
      .replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()); 
  };
  return (
    <View style={styles.container}>
      {Object.entries(productProperties).map(([key, value]) => (
        <View key={key} style={styles.item}>
          <Text style={styles.boldText}>{formatKey(key)}: </Text>
          <Text style={styles.valueText}>{value}</Text>
        </View>
      ))}
    </View>
  );
};

export default ProductProperties;



const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 6,
    flexWrap: 'wrap',
  },
  boldText: {
    fontWeight: '600',
    color: '#333',
  },
  valueText: {
    color: '#666',
  },
});
