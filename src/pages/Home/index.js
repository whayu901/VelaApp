import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import styles from "./styles";
import { CardMenu } from "../../components";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <View style={{ marginTop: 70, marginLeft: 25 }}>
          <Text style={{ fontSize: 20 }}>Hi, Vela</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 25,
            marginTop: 120,
          }}>
          <View>
            <CardMenu
              title="List Barang"
              onPress={() => navigation.navigate("ListBarang")}
            />
          </View>
          <View>
            <CardMenu
              title="Barang Masuk"
              onPress={() => navigation.navigate("BarangMasuk")}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 25,
            marginTop: 25,
          }}>
          <View>
            <CardMenu title="Barang Keluar" />
          </View>
          <View>
            <CardMenu
              title="Laporan"
              onPress={() => navigation.navigate("Laporan")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
