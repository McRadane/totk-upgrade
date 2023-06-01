import { Tabs } from "./components/Tabs/Tabs";
import { CostsTable } from "./components/CostsTable/CostsTable";
import { Armor } from "./components/ArmorTable/Armor";
import { ScrollToTop } from "./components/ScrollToTop";
import "./assets/app.scss";

function App() {
  return (
    <>
      <Tabs
        tabs={[
          { id: 1, title: "Armors", page: Armor },
          { id: 2, title: "Costs", page: CostsTable },
        ]}
      />
      <ScrollToTop />
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <a
          className="text-reset fw-bold"
          href="https://github.com/McRadane/totk-upgrade"
        >
          Project's GitHub repository
        </a>
      </div>
    </>
  );
}

export default App;
