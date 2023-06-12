/* eslint-disable import/unambiguous */
/// <reference types="vite/client" />

declare const APP_VERSION: string;

interface ImportMetaEnv {
  readonly VITE_SITE_DESCRIPTION: string;
  readonly VITE_SITE_NAME: string;
  readonly VITE_SITE_SHORTNAME: string;
  readonly VITE_SITE_TITLE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
