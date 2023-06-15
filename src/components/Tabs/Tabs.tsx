import { type FC, useMemo } from "react";
import { useSelector } from "react-redux";

import { type IRootState } from "../../redux/store";

import { Tab } from "./Tab";

export interface ITabsProps {
  tabs: { id: number; page: () => JSX.Element; title: string }[];
}

export const Tabs: FC<ITabsProps> = ({ tabs }) => {
  const activePage = useSelector((state: IRootState) => state.navigation.page);

  const Page = useMemo(() => {
    const foundPage = tabs.find((tab) => tab.id === activePage);
    if (!foundPage) {
      return tabs[0].page;
    }
    return foundPage.page;
  }, [activePage, tabs]);

  return (
    <>
      <nav>
        <ul className="nav nav-tabs">
          {tabs.map((tab) => (
            <Tab key={tab.id} tab={tab} />
          ))}
        </ul>
      </nav>
      <main style={{ paddingTop: 20 }}>
        <Page />
      </main>
    </>
  );
};
