import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { TextInput } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";

import styles from "./styles";
import { Button } from "../../components";

const BarangMasuk = () => {
  const navigation = useNavigation();

  const [namaBarang, setNamaBarang] = useState("");
  const [jumlahBarang, setJumlahBarang] = useState("");
  const [hargaBarang, setHargaBarang] = useState("");
  const [imgBarang, setImgBarang] = useState("");

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ height: 150, justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Kamera", {
                onGoBack: (value) => setImgBarang(value),
              })
            }>
            <Text style={{ textAlign: "center" }}>Tambah Foto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            label="Nama Barang"
            mode="outlined"
            placeholder={"Masukan Nama Barang"}
            value={namaBarang}
            onChangeText={(namaBarang) => setNamaBarang(namaBarang)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            label="Jumlah Barang"
            mode="outlined"
            placeholder={"Masukan Jumlah Barang"}
            value={jumlahBarang}
            onChangeText={(jumlahBarang) => setJumlahBarang(jumlahBarang)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            label="Harga Barang"
            mode="outlined"
            placeholder={"Masukan Harga Barang"}
            value={hargaBarang}
            onChangeText={(hargaBarang) => setHargaBarang(hargaBarang)}
            render={(props) => (
              <TextInputMask
                {...props}
                type={"money"}
                options={{
                  precision: 0,
                  separator: ",",
                  delimiter: ".",
                  unit: "Rp.",
                  suffixUnit: "",
                }}
              />
            )}
          />
        </View>

        <View style={{ marginHorizontal: 10 }}>
          <Button text={"Tambah"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BarangMasuk;
