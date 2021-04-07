import "react-native-gesture-handler";
import React from "react";
import { View, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <View>
            <Text>Hello world</Text>
            <Text>Hello Vela</Text>
          </View>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
