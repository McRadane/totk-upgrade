import { Armor } from "./components/ArmorTable/Armor";
import { CostsTable } from "./components/CostsTable/CostsTable";
import { ScrollToTop } from "./components/ScrollToTop";
import { Tabs } from "./components/Tabs/Tabs";

import "./assets/app.scss";

function App() {
  return (
    <>
      <Tabs
        tabs={[
          { id: 1, page: Armor, title: "Armors" },
          { id: 2, page: CostsTable, title: "Costs" },
        ]}
      />
      <ScrollToTop />
      <footer
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="p-4"
      >
        <span>
          {import.meta.env.VITE_SITE_NAME} v{APP_VERSION} by McRadane
        </span>
        <a
          className="text-reset fw-bold"
          href="https://github.com/McRadane/totk-upgrade"
          rel="noopener"
          target="_blank"
        >
          Project's GitHub repository
        </a>
      </footer>
    </>
  );
}

export default App;
