// import "./assets/styles.scss";
import "./assets/app.scss";
import { Tabs } from "./components/Tabs/Tabs";
import { CostsTable } from "./components/CostsTable/CostsTable";
import { Armor } from "./components/ArmorTable/Armor";

import { ScrollToTop } from "./components/ScrollToTop";

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
    </>
  );
}

export default App;
