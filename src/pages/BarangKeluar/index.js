import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { getListBarang } from "../../redux/actions";
import { CardBarang, LoadingIndicator } from "../../components";

const BarangKeluar = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [tempData, setTempData] = useState([]);
  const [search, setSearch] = useState("");

  const { barang } = useSelector(
    (state) => ({
      barang: state.barang,
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getListBarang());
  }, []);

  useEffect(() => {
    setTempData(barang?.dataListBarang);
  }, [barang?.dataListBarang]);

  const _searchBarang = () => {
    const formattedQuery = search.toLowerCase();
    const filter = tempData.filter((item) => {
      return item.name.toLowerCase().match(formattedQuery);
    });

    if (!search || search == "") {
      setTempData(barang?.dataListBarang);
    } else {
      setTempData(filter);
    }
  };

  const _dataEmpty = () => (
    <View style={{ marginTop: 30 }}>
      <Text style={{ textAlign: "center" }}>Data Tidak Tersedia</Text>
    </View>
  );

  return (
    <View>
      <View style={{ marginHorizontal: 10, marginTop: 5 }}>
        <Searchbar
          placeholder="Cari Disini"
          onChangeText={(cari) => setSearch(cari)}
          onSubmitEditing={() => _searchBarang()}
        />
      </View>
      <FlatList
        data={tempData}
        ListEmptyComponent={_dataEmpty}
        renderItem={({ item }) => (
          <View style={{ marginTop: 10, marginHorizontal: 10 }}>
            <CardBarang
              isBarangKeluar
              onPressKeluar={() => {
                navigation.navigate("Detail", { id: item.id });
              }}
              harga={item.amount}
              name={item.name}
              qty={item.quantity}
              // onPress={() =>
              //   navigation.navigate("Detail", { isDetail: true, id: item.id })
              // }
            />
          </View>
        )}
      />
    </View>
  );
};

export default BarangKeluar;
