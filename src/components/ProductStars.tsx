import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProductStarProps } from '../modals/components';
import CustomIcon from './CustomIcon';



const ProductStar: React.FC<ProductStarProps> = ({ rating,size,color }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<CustomIcon key={i} name="star" size={size} color={color} />);
    } else if (rating >= i - 0.5) {
      stars.push(<CustomIcon key={i} name="star-half-outline" size={size} color={color} />);
    } else {
      stars.push(<CustomIcon key={i} name="star-outline" size={size} color={color} />);
    }
  }

  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default ProductStar;
