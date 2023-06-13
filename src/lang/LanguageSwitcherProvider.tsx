import {
  type FC,
  type ReactNode,
  createContext,
  useMemo,
} from "react";
import { useDispatch } from "react-redux";

import { setLanguage, useLanguage } from "../reducers/navigation";

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
  setLocale: (newLocale: string) => void;
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

  const language = useLanguage();
  const dispatch = useDispatch();

  const locale = useMemo(() => language ? resolveLocale(language) :  resolveLocale(window.navigator.language), [language]);

  const setLocale = (newLocale: string) => {
    dispatch(setLanguage(resolveLocale(newLocale)));
  }

  return (
    <LanguageSwitcherContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageSwitcherContext.Provider>
  );
};
