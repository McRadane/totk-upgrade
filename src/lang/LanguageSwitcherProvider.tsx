import {
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
  createContext,
  useState,
} from "react";

import { LOCALES, LOCALES_SHORT } from "./locales";

const resolveLocale = (wanted: string) => {
  if (wanted.includes("-")) {
    wanted = wanted.split("-")[0];
  }

  if (wanted in LOCALES) {
    return wanted;
  }

  if (wanted in LOCALES_SHORT) {
    return wanted;
  }

  return LOCALES.ENGLISH;
};
interface ILanguageSwitcherProvider {
  locale: string;
  setLocale: Dispatch<SetStateAction<string>>;
}

export const LanguageSwitcherContext = createContext<ILanguageSwitcherProvider>(
  {
    locale: LOCALES.ENGLISH,
    setLocale: () => {
      //
    },
  }
);

export const LanguageSwitcherProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState(
    resolveLocale(window.navigator.language)
  );

  return (
    <LanguageSwitcherContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageSwitcherContext.Provider>
  );
};
