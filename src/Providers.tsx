import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme, useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import { LangProvider } from "./lang/LangProvider";
import { LanguageSwitcherProvider } from "./lang/LanguageSwitcherProvider";
import { persistor, store } from "./redux/store";

export const Providers = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LanguageSwitcherProvider>
            <LangProvider>
              <App />
            </LangProvider>
          </LanguageSwitcherProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};
