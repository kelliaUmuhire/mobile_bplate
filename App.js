import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Main from "./src/Main";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </Provider>
  );
}

// AppRegistry.registerComponent(appName, () => Main);
