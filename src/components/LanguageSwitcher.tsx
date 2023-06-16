import { FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import { type FC, useCallback, useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { LanguageSwitcherContext } from "../lang/LanguageSwitcherProvider";
import { LOCALES } from "../lang/locales";

export const LanguageSwitcher: FC = () => {
  const intl = useIntl();
  const { locale, setLocale } = useContext(LanguageSwitcherContext);

  const onSelectLanguage = useCallback(
    (e: SelectChangeEvent<string>) => {
      setLocale(e.target.value);
    },
    [setLocale]
  );

  return (
    <FormControl size="small" fullWidth>
      <InputLabel id="language-switcher-label">
        <FormattedMessage id="languageSwitcher" defaultMessage="Language Switcher" />
      </InputLabel>
      <Select
        id="language-switcher"
        label={intl.formatMessage({
          defaultMessage: "Language Switcher",
          id: "languageSwitcher"
        })}
        labelId="language-switcher-label"
        onChange={onSelectLanguage}
        value={locale}
      >
        <MenuItem value={LOCALES.ENGLISH}>
          <FormattedMessage id="languageEnglish" defaultMessage="English" description={"English language in language switcher"} />
        </MenuItem>
        <MenuItem value={LOCALES.FRENCH}>
          <FormattedMessage id="languageFrench" defaultMessage="French" description={"French language in language switcher"} />
        </MenuItem>
      </Select>
    </FormControl>
  );
};
