import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import styles from "./styles";
import { Button, LoadingIndicator } from "../../components";
import { wait } from "../../utils";
import { login } from "../../redux/actions";

const LoginPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { auth } = useSelector(
    (state) => ({
      auth: state.auth,
    }),
    shallowEqual,
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginForm = async () => {
    await dispatch(
      login({ email: email, password: password, cb: onSuccessLogin() }),
    );
  };

  const onSuccessLogin = () => {
    wait(500).then(() => {
      navigation.navigate("Home");
    });
  };

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
            <Button text={"Login"} onPress={() => LoginForm()} />
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Button
              text={"Register"}
              onPress={() => navigation.navigate("Register")}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>

      {/* Modal Login */}
      <Modal isVisible={auth.isLoadingLogin}>
        <LoadingIndicator />
      </Modal>
    </SafeAreaView>
  );
};

export default LoginPage;
