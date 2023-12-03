import React from "react";
import { StatusBar, Platform } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./appRedux/store/configureStore";
const storeConfig = configureStore();
import SplashScreen from "react-native-splash-screen";
import "./locales/IMLocalize";

import Root from "./screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <GestureHandlerRootView>
      <Provider store={storeConfig.store}>
        <PersistGate loading={null} persistor={storeConfig.persistor}>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            barStyle={"light-content"}
          />
          <Root />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
