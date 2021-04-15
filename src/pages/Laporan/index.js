import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { Colors } from "../../config";
import styles from "./styles";

const Laporan = () => {
  const [isVisibleBarangMasuk, setVisibleBarangMasuk] = useState(false);
  const [isVisibleBarangKeluar, setVisibleBarangKeluar] = useState(false);

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.primary,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 50,
              zIndex: 1,
              paddingVertical: 5,
              marginHorizontal: 15,
            }}>
            <View style={{ paddingLeft: 15 }}>
              <Text>Barang Masuk</Text>
            </View>
            <View style={{ marginEnd: 10 }}>
              <Icon name="chevron-down-sharp" size={30} />
            </View>
          </View>
        </TouchableOpacity>
        <Animated.View>{isVisibleBarangMasuk && <View></View>}</Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default Laporan;
