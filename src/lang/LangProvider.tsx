import { type FC, type ReactNode, useContext } from "react";
import { IntlProvider } from "react-intl";

import { LanguageSwitcherContext } from "./LanguageSwitcherProvider";
import { LOCALES } from "./locales";
import { messages } from "./messages";

export const LangProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { locale } = useContext(LanguageSwitcherContext);

  return (
    <IntlProvider
      defaultLocale={LOCALES.ENGLISH}
      locale={locale}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
};
