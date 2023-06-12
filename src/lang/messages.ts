import en from "./en.json";
import fr from "./fr.json";
import { LOCALES } from "./locales";

export const messages: Record<string, Record<string, string>> = {
  [LOCALES.ENGLISH]: en,
  [LOCALES.FRENCH]: fr,
};
