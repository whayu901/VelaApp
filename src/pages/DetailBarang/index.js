import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import IconDelete from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";

import styles from "./styles";
import { Button } from "../../components";

const DetailBarang = () => {
  const route = useRoute();

  const [namaBarang, setNamaBarang] = useState("");
  const [jumlahBarang, setJumlahBarang] = useState("");
  const [hargaBarang, setHargaBarang] = useState("");
  const [imgBarang, setImgBarang] = useState("");

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ height: 170, justifyContent: "center", marginTop: 20 }}>
          {imgBarang == "" ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Kamera", {
                  onGoBack: (value) => setImgBarang(value),
                })
              }>
              <Text style={{ textAlign: "center" }}>Tambah Foto</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ alignSelf: "center" }}>
              <TouchableOpacity
                onPress={() => setImgBarang("")}
                style={styles.IconDelete}>
                <IconDelete name="ios-close" size={25} color="red" />
              </TouchableOpacity>
              <Image
                source={{ uri: imgBarang }}
                style={{ height: 180, width: 180 }}
                resizeMode="contain"
              />
            </View>
          )}
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
          <Button
            text={route.params.isDetail ? "Edit Barang" : "Keluarkan Barang"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailBarang;
