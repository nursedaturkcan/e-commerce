import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../themes/colors';

interface SortComponentProps {
  selectedSort?: string;
  onChange: (value: string) => void;
}

const sortOptions = [
  { label: "RELEVANCE", value: "RELEVANCE" },
  { label: "LOWEST PRICE", value: "LOWEST_PRICE" },
  { label: "HIGHEST PRICE", value: "HIGHEST_PRICE" },
  { label: "REVIEWS", value: "REVIEWS" },
  { label: "NEWEST", value: "NEWEST" },
  { label: "BEST SELLERS", value: "BEST_SELLERS" }
];

const SortButton: React.FC<SortComponentProps> = ({ selectedSort, onChange }) => {
  return (
    <View style={styles.container}>
      {sortOptions.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={[
            styles.option,
            selectedSort === option.value && styles.selected
          ]}
          onPress={() => onChange(option.value)}
        >
          <Text style={selectedSort === option.value ? styles.selectedText : styles.text}>
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  option: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  selected: {
    backgroundColor: Colors.ORANGE,
  },
  text: {
    color: '#333',
  },
  selectedText: {
    color: '#fff',
  },
});

export default SortButton;
