import React from "react";
import { SafeAreaView, View, FlatList } from "react-native";
import { FAB } from "react-native-paper";

import { CardBarang } from "../../components";
import { Colors } from "../../config";
import styles from "./styles";

const ListBarang = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginHorizontal: 10 }}>
        <CardBarang />
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
