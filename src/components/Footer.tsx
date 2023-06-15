import { FormattedMessage } from "react-intl";

import { LanguageSwitcher } from "./LanguageSwitcher";

export const Footer = () => {
  return (
    <footer
      style={{
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        display: "flex",
        fontSize: "0.8rem",
        justifyContent: "space-between"
      }}
      className="p-4 row"
    >
      <LanguageSwitcher className="col" style={{ fontSize: "0.8rem", maxWidth: "20%" }} />
      <span className="col">
        <FormattedMessage
          id="footerVersion"
          values={{
            name: import.meta.env.VITE_SITE_NAME,
            version: APP_VERSION
          }}
          defaultMessage="{name} v{version} by McRadane"
        />
      </span>
      <a
        className="col text-reset fw-bold"
        data-testid="footer-github"
        href="https://github.com/McRadane/totk-upgrade"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FormattedMessage id="linkGitHub" defaultMessage="Project's GitHub repository" />
      </a>
    </footer>
  );
};
