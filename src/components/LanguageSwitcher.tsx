import { type FC, useCallback, useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { LanguageSwitcherContext } from "../lang/LanguageSwitcherProvider";
import { LOCALES } from "../lang/locales";

interface ILanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<ILanguageSwitcherProps> = ({ className }) => {
  const intl = useIntl();
  const { locale, setLocale } = useContext(LanguageSwitcherContext);

  const onSelectLanguage = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setLocale(e.target.value);
    },
    [setLocale]
  );

  return (
    <select
      aria-label={intl.formatMessage({
        defaultMessage: "Language Switcher",
        id: "languageSwitcher",
      })}
      className={`${className ?? ""} form-select`}
      onChange={onSelectLanguage}
    >
      <option selected={locale === LOCALES.ENGLISH} value={LOCALES.ENGLISH}>
        <FormattedMessage
          id="languageEnglish"
          defaultMessage="English"
          description={"English language in language switcher"}
        />
      </option>
      <option selected={locale === LOCALES.FRENCH} value={LOCALES.FRENCH}>
        <FormattedMessage
          id="languageFrench"
          defaultMessage="French"
          description={"French language in language switcher"}
        />
      </option>
    </select>
  );
};
