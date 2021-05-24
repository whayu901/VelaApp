import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Svg, { Path } from "react-native-svg";

import styles from "./styles";
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
        <View style={styles.curve}>
          <Svg
            height="60%"
            width="100%"
            viewBox="0 0 1440 320"
            style={{ position: "absolute", top: 130 }}>
            <Path
              fill="#bf344e"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </Svg>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => Logout()}
            style={{ marginLeft: "auto", marginRight: 25, marginTop: 20 }}>
            <Text style={{ color: Colors.white }}>Keluar</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 50, marginLeft: 25 }}>
            <Text style={{ fontSize: 18, color: Colors.white }}>Hi,</Text>
            <Text style={{ fontSize: 24, color: Colors.white }}>
              {auth.name}
            </Text>
          </View>
        </View>
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
    </SafeAreaView>
  );
};

export default HomeScreen;
