import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { Button } from "../../components";

const LoginPage = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.loginText}>LOGIN</Text>
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

          <View style={{ margin: 10 }}>
            <Button
              text={"Login"}
              onPress={() => navigation.navigate("Home")}
            />
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Button
              text={"Register"}
              onPress={() => navigation.navigate("Register")}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;
