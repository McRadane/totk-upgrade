import { Box, Tab, Tabs } from "@mui/material";
import { type FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPage } from "../../redux/navigation";
import { type IRootState } from "../../redux/store";

import { TabPanel } from "./TabPanel";

export interface ITabsProps {
  tabs: { id: number; page: () => JSX.Element; title: string }[];
}

export const TabsContainer: FC<ITabsProps> = ({ tabs }) => {
  const activePage = useSelector((state: IRootState) => state.navigation.page);

  const dispatch = useDispatch();

  const setActivePage = useCallback(
    (_event: React.SyntheticEvent<Element, Event>, value: number) => {
      dispatch(setPage(value));
    },
    [dispatch]
  );

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs aria-label="basic tabs example" onChange={setActivePage} value={activePage}>
          {tabs.map((tab) => (
            <Tab id={`tab-${tab.id}`} aria-controls={`tabpanel-${tab.id}`} key={tab.id} label={tab.title} value={tab.id} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab) => (
        <TabPanel index={tab.id} key={tab.id} page={tab.page} value={activePage} />
      ))}
    </>
  );
};
