import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

import styles from "./styles";
import { Button } from "../../components";

const LoginPage = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Role = [
    {
      value: 1,
      label: "Kepala Gudang",
    },
    {
      value: 2,
      label: "Manager",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.loginText}>REGISTER</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              label="Email"
              mode="outlined"
              placeholder={"Masukan Email"}
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              label="Password"
              mode="outlined"
              placeholder={"Masukan Password"}
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <View>
            <DropDownPicker
              items={Role}
              placeholder="Jabatan"
              containerStyle={{
                height: 55,
                borderColor: "#515151",
                borderWidth: 1,
                margin: 10,
              }}
              style={{ backgroundColor: "transparent", zIndex: 10 }}
              itemStyle={{ zIndex: 10 }}
            />
          </View>

          <View style={{ marginHorizontal: 10, zIndex: -5 }}>
            <Button text={"Register"} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;
