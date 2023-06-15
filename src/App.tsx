import { useIntl } from "react-intl";

import { Armor } from "./components/ArmorTable/Armor";
import { CostsTable } from "./components/CostsTable/CostsTable";
import { Footer } from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;
