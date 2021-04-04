import React from "react";
import { View, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

const App = () => {
  return (
    <PaperProvider>
      <View>
        <Text>Hello world</Text>
        <Text>Hello Vela</Text>
      </View>
    </PaperProvider>
  );
};

export default App;
