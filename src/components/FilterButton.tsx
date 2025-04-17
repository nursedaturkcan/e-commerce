import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, StyleSheet, Text } from 'react-native';

interface FilterDropdownProps {
  selectedCondition: string;
  onChange: (value: string) => void;
}

const FilterButton: React.FC<FilterDropdownProps> = ({ selectedCondition, onChange }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(selectedCondition);
  const [items, setItems] = useState([
    { label: 'ALL', value: 'ALL' },
    { label: 'NEW', value: 'NEW' },
    { label: 'USED', value: 'USED' },
    { label: 'RENEWED', value: 'RENEWED' },
    { label: 'COLLECTIBLE', value: 'COLLECTIBLE' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Product Condition:</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={(callback) => {
          const newValue = callback(value);
          setValue(newValue);
          onChange(newValue);
        }}
        setItems={setItems}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1000, 
    marginHorizontal: 16,
    marginTop: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  dropdown: {
    borderColor: '#ccc',
    height: 40,
  },
  dropdownContainer: {
    borderColor: '#ccc',
  },
});

export default FilterButton;
