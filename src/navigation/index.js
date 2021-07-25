import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainStack from "./mainStack";

const Route = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Route;
