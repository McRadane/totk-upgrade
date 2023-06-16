import { Box } from "@mui/material";
import type { FC } from "react";

interface ITabPanelProps {
  index: number;
  page: () => JSX.Element;
  value: number;
}

export const TabPanel: FC<ITabPanelProps> = ({ index, page: Page, value, ...other }) => {
  return (
    <main
      id={`tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      role="tabpanel"
      style={{ flex: 1, paddingTop: 20 }}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{value === index && <Page />}</Box>}
    </main>
  );
};
