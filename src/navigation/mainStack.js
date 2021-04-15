import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import InitialPage from "../pages/initialPage";
import HomeScreen from "../pages/Home";
import ListBarangScreen from "../pages/ListBarang";

import LoginScreen from "../pages/Login";
import RegisterScreen from "../pages/Register";
import BarangMasukScreen from "../pages/BarangMasuk";
import DetailScreen from "../pages/DetailBarang";
import LaporanScreen from "../pages/Laporan";

import CameraScreen from "../pages/Camera";

const Stack = createStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="initialPage">
      <Stack.Screen
        options={{ headerShown: false }}
        name="initialPage"
        component={InitialPage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ListBarang" component={ListBarangScreen} />
      <Stack.Screen name="BarangMasuk" component={BarangMasukScreen} />
      <Stack.Screen name="Kamera" component={CameraScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Laporan" component={LaporanScreen} />
    </Stack.Navigator>
  );
};
