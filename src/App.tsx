import { FormattedMessage, useIntl } from "react-intl";

import { Armor } from "./components/ArmorTable/Armor";
import { CostsTable } from "./components/CostsTable/CostsTable";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { ScrollToTop } from "./components/ScrollToTop";
import { Tabs } from "./components/Tabs/Tabs";

import "./assets/app.scss";

function App() {
  const intl = useIntl();

  return (
    <>
      <Tabs
        tabs={[
          {
            id: 1,
            page: Armor,
            title: intl.formatMessage({
              defaultMessage: "Armor",
              id: "menuArmor"
            })
          },
          {
            id: 2,
            page: CostsTable,
            title: intl.formatMessage({
              defaultMessage: "Costs",
              id: "menuCosts"
            })
          }
        ]}
      />
      <ScrollToTop />
      <footer
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          display: "flex",
          justifyContent: "space-between"
        }}
        className="p-4 row"
      >
        <LanguageSwitcher className="col" />
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
    </>
  );
}

export default App;
