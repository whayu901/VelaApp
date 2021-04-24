import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { CardMenu } from "../../components";
import { Colors } from "../../config";
import { logout } from "../../redux/actions";

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { auth } = useSelector(
    (state) => ({
      auth: state.auth,
    }),
    shallowEqual,
  );

  const Logout = () => {
    dispatch(logout());
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <TouchableOpacity
          onPress={() => Logout()}
          style={{ marginLeft: "auto", marginRight: 25, marginTop: 20 }}>
          <Text style={{ color: Colors.primary }}>Keluar</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 50, marginLeft: 25 }}>
          <Text style={{ fontSize: 20 }}>Hi, {auth.name}</Text>
        </View>

        {auth?.role == 1 ? (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 25,
                marginTop: 100,
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
                <CardMenu
                  title="Barang Keluar"
                  onPress={() => navigation.navigate("BarangKeluar")}
                />
              </View>
              <View>
                <CardMenu
                  title="Laporan"
                  onPress={() => navigation.navigate("Laporan")}
                />
              </View>
            </View>
          </View>
        ) : (
          <View
            style={{
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: 25,
              marginTop: 120,
            }}>
            <View>
              <CardMenu
                title="Laporan"
                onPress={() => navigation.navigate("Laporan")}
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
