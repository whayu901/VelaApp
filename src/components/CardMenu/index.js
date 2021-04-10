import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const CardMenu = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={{
          alignSelf: "center",
          alignContent: "center",
          justifyContent: "center",
          flex: 1,
        }}>
        <Text style={styles.textMenu}>Barang Keluar</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardMenu;
