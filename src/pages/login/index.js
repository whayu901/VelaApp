import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./styles";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View>
          <TextInput
            label="Email"
            mode="outlined"
            placeholder={"Masukan Email"}
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            label="Password"
            mode="outlined"
            placeholder={"Masukan Password"}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;
