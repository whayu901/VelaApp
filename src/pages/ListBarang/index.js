import React, { useEffect, useState } from "react";
import { SafeAreaView, View, FlatList, Text } from "react-native";
import { FAB } from "react-native-paper";
import {
  useNavigation,
  useIsFocused,
  useRoute,
} from "@react-navigation/native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Modal from "react-native-modal";

import { CardBarang, LoadingIndicator, Button } from "../../components";
import { Colors } from "../../config";
import styles from "./styles";
import {
  getListBarang,
  deleteBarang,
  getBarangDefact,
} from "../../redux/actions";

const ListBarang = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const { barang } = useSelector(
    (state) => ({
      barang: state.barang,
    }),
    shallowEqual,
  );

  useEffect(() => {
    _fetchData();
  }, [isFocused]);

  const _fetchData = async () => {
    if (route.params.type == "defact") {
      await dispatch(getBarangDefact());
    } else {
      await dispatch(getListBarang());
    }
  };

  const _deleteBarang = async (value) => {
    await dispatch(deleteBarang({ id: value }));
    setVisible(true);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={
          route.params.type == "defact"
            ? barang?.dataDefact
            : barang?.dataListBarang
        }
        renderItem={({ item }) => (
          <View style={{ marginTop: 10, marginHorizontal: 10 }}>
            <CardBarang
              harga={item.amount}
              name={item.name}
              id={item.id}
              qty={item.quantity}
              isDefact={route.params.type == "defact" ? true : false}
              onPressDelete={() => _deleteBarang(item.id)}
              onPress={() => {
                if (route.params.type == "defact") {
                  return null;
                } else {
                  navigation.navigate("Detail", {
                    isDetail: true,
                    id: item.id,
                  });
                }
              }}
            />
          </View>
        )}
      />

      <FAB
        style={styles.fab}
        icon="plus"
        theme={Colors.primary}
        color={Colors.primary}
        onPress={() => {
          if (route.params.type == "defact") {
            navigation.navigate("Defact");
          } else {
            navigation.navigate("BarangMasuk");
          }
        }}
      />

      <Modal isVisible={visible}>
        <View style={{ backgroundColor: "#fff", borderRadius: 10 }}>
          <View style={{ marginVertical: 40 }}>
            <Text style={{ fontSize: 16, textAlign: "center" }}>
              Berhasil Hapus Data Barang
            </Text>
          </View>
          <Button
            text={"Done"}
            onPress={() => {
              setVisible(false);
              dispatch(getListBarang());
            }}
          />
        </View>
      </Modal>

      <Modal isVisible={barang?.isLoadingDelete}>
        <LoadingIndicator isLoading={barang?.isLoadingDelete} />
      </Modal>
    </SafeAreaView>
  );
};

export default ListBarang;
