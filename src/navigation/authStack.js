import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../pages/Login";
import RegisterScreen from "../pages/Register";

const Stack = createStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
