import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const CardMenu = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={{
          alignSelf: "center",
          alignContent: "center",
          justifyContent: "center",
          flex: 1,
        }}>
        <Text style={styles.textMenu}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardMenu;
