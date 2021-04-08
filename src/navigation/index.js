import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthStack from "./authStack";
import MainStack from "./mainStack";

const Route = () => {
  const { isLogin } = useSelector((state) => state.auth);
  console.log({ isLogin });

  return (
    <NavigationContainer>
      {isLogin ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Route;
