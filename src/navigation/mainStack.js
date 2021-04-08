import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../pages/Home";

const Stack = createStackNavigator();

export default MainStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
