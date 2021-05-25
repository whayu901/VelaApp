import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

const CardMenu = ({ title, onPress, img }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={{
          alignSelf: "center",
          alignContent: "center",
          justifyContent: "center",
          flex: 1,
        }}>
        <Image
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
          source={img}
        />
        <Text style={styles.textMenu}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardMenu;
