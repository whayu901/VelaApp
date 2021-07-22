import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IconPencil from "react-native-vector-icons/Ionicons";

import styles from "./styles";
import { formatMoney } from "../../utils";

const CardBarang = ({
  onPress,
  qty,
  name,
  id,
  harga,
  onPressDelete,
  onPressKeluar,
  isDefact,
  isBarangKeluar,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Nama Barang</Text>
        <Text style={{ textAlign: "center" }}>{name}</Text>
      </View>

      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>QTY</Text>
        <Text style={{ textAlign: "center" }}>{qty}</Text>
      </View>

      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Harga Barang</Text>
        <Text style={{ textAlign: "center" }}>{`Rp.${formatMoney(
          harga,
        )}`}</Text>
      </View>

      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>ID</Text>
        <Text style={{ textAlign: "center" }}>{id}</Text>
      </View>

      {isBarangKeluar ? (
        <TouchableOpacity style={{ paddingTop: 10 }} onPress={onPressKeluar}>
          <Text style={styles.pilihtext}>Pilih</Text>
        </TouchableOpacity>
      ) : (
        !isDefact && (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{ paddingTop: 10, marginHorizontal: 20 }}
              onPress={onPress}>
              <IconPencil name="ios-pencil" size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ paddingTop: 10 }}
              onPress={onPressDelete}>
              <IconPencil name="ios-close" size={25} />
            </TouchableOpacity>
          </View>
        )
      )}
    </View>
  );
};

export default CardBarang;
