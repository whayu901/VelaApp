import "react-native-gesture-handler";
import React from "react";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./src/redux/store";
import Route from "./src/navigation";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#bf344e",
    accent: "#a7e9e1",
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <Route />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
