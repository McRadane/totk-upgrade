import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import { LangProvider } from "./lang/LangProvider";
import { LanguageSwitcherProvider } from "./lang/LanguageSwitcherProvider";
import { persistor, store } from "./redux/store";

export const Providers = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <LanguageSwitcherProvider>
        <LangProvider>
          <App />
        </LangProvider>
      </LanguageSwitcherProvider>
    </PersistGate>
  </Provider>
);
