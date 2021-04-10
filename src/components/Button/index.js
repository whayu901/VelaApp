import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "./style";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
