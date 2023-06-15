import { type CSSProperties, type FC, useCallback, useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { LanguageSwitcherContext } from "../lang/LanguageSwitcherProvider";
import { LOCALES } from "../lang/locales";

interface ILanguageSwitcherProps {
  className?: string;
  style?: CSSProperties;
}

export const LanguageSwitcher: FC<ILanguageSwitcherProps> = ({ className, style }) => {
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
        id: "languageSwitcher"
      })}
      className={`${className ?? ""} form-select`}
      onChange={onSelectLanguage}
      style={style}
      value={locale}
    >
      <option value={LOCALES.ENGLISH}>
        <FormattedMessage id="languageEnglish" defaultMessage="English" description={"English language in language switcher"} />
      </option>
      <option value={LOCALES.FRENCH}>
        <FormattedMessage id="languageFrench" defaultMessage="French" description={"French language in language switcher"} />
      </option>
    </select>
  );
};
