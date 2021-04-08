import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../pages/Login";

const Stack = createStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
