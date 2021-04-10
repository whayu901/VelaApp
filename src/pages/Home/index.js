import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { CardMenu } from "../../components";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <View>
          <Text>Hi, Vela</Text>
        </View>

        <View>
          <CardMenu />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
