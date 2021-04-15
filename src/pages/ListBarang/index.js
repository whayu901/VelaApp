import React from "react";
import { SafeAreaView, View, FlatList } from "react-native";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { CardBarang } from "../../components";
import { Colors } from "../../config";
import styles from "./styles";

const ListBarang = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginHorizontal: 10 }}>
        <CardBarang
          onPress={() => navigation.navigate("Detail", { isDetail: true })}
        />
      </View>

      <FAB
        style={styles.fab}
        icon="plus"
        theme={Colors.primary}
        color={Colors.primary}
        onPress={() => alert("Pressed")}
      />
    </SafeAreaView>
  );
};

export default ListBarang;
