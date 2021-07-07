import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import styles from "./styles";
import { Button, LoadingIndicator } from "../../components";
import { register } from "../../redux/actions";

const RegisterPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { auth } = useSelector(
    (state) => ({
      auth: state.auth,
    }),
    shallowEqual,
  );

  const [registerForm, setRegisterForm] = useState({
    password: "",
    name: "",
    role_id: "",
    email: "",
  });
  const [isVisibleSuccess, setVisibleSuccess] = useState(false);

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

  const RegisterConfirm = async () => {
    await dispatch(
      register({ data: registerForm, cb: () => onSuccessRegister() }),
    );
  };

  const onSuccessRegister = () => {
    setTimeout(() => {
      setVisibleSuccess(true);
    }, 1000);
  };

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
              value={registerForm.email}
              onChangeText={(email) =>
                setRegisterForm({ ...registerForm, email })
              }
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              label="Nama"
              mode="outlined"
              placeholder={"Masukan Nama"}
              value={registerForm.name}
              onChangeText={(name) =>
                setRegisterForm({ ...registerForm, name })
              }
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              label="Password"
              mode="outlined"
              placeholder={"Masukan Password"}
              value={registerForm.password}
              onChangeText={(password) =>
                setRegisterForm({ ...registerForm, password })
              }
            />
          </View>

          <View style={{ width: "100%" }}>
            <DropDownPicker
              items={Role}
              defaultValue={registerForm.role_id}
              placeholder={"Pilih Jabatan"}
              containerStyle={{
                height: 55,
                margin: 10,
              }}
              style={{
                backgroundColor: "#fafafa",
                borderColor: "#515151",
                borderWidth: 1,
              }}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{
                backgroundColor: "#fafafa",
              }}
              onChangeItem={(item) =>
                setRegisterForm({ ...registerForm, role_id: item.value })
              }
            />
          </View>

          <View style={{ marginHorizontal: 10, zIndex: -5, marginTop: 20 }}>
            <Button text={"Register"} onPress={() => RegisterConfirm()} />
          </View>
        </View>
      </KeyboardAwareScrollView>

      {/* Modal Register */}
      <Modal isVisible={auth.isLoadingRegister}>
        <LoadingIndicator />
      </Modal>

      {/* Modal Success Register */}
      <Modal isVisible={isVisibleSuccess}>
        <View style={{ backgroundColor: "#fff", borderRadius: 10 }}>
          <View style={{ marginVertical: 40 }}>
            <Text style={{ fontSize: 16, textAlign: "center" }}>
              Anda Berhasil Registasi. Silahkan Login
            </Text>
          </View>
          <Button
            text={"Done"}
            onPress={() => {
              setVisibleSuccess(false);
              navigation.navigate("Login");
            }}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default RegisterPage;
