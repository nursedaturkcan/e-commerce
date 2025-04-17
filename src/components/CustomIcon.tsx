import React from "react";
import Icon from "react-native-vector-icons/Ionicons"
import { CustomIconProps } from "../modals/components";



const CustomIcon: React.FC<CustomIconProps> = ({ focused,name, size = 24, color = "black" }) => {
  return <Icon name={name} size={size} color={color} />;
};

export default CustomIcon;
