import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.tsx";
import { persistor, store } from "./configureStore";
import { LangProvider } from "./lang/LangProvider.tsx";
import { LanguageSwitcherProvider } from "./lang/LanguageSwitcherProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LanguageSwitcherProvider>
          <LangProvider>
            <App />
          </LangProvider>
        </LanguageSwitcherProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
