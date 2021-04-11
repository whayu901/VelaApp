import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IconPencil from "react-native-vector-icons/Ionicons";

import styles from "./styles";

const CardBarang = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Nama Barang</Text>
        <Text style={{ textAlign: "center" }}>Busi Yamaha</Text>
      </View>

      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>QTY</Text>
        <Text style={{ textAlign: "center" }}>10</Text>
      </View>

      <TouchableOpacity style={{ paddingTop: 10 }}>
        <IconPencil name="ios-pencil" size={20} />
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingTop: 10 }}>
        <IconPencil name="ios-close" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default CardBarang;
