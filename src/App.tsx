import { Container } from "@mui/material";
import { useIntl } from "react-intl";

import { Armor } from "./components/ArmorTable/Armor";
import { CostsTable } from "./components/CostsTable/CostsTable";
import { Footer } from "./components/Footer";
import { TabsContainer } from "./components/Tabs/TabsContainer";

import "./assets/app.scss";

function App() {
  const intl = useIntl();

  return (
    <Container sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <TabsContainer
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
      <Footer />
    </Container>
  );
}

export default App;
