import { FC, useMemo } from "react";
import { Tab } from "./Tab";
import { useSelector } from "react-redux";
import { IRootState } from "../../configureStore";

export interface ITabsProps {
  tabs: { id: number; title: string; page: () => JSX.Element }[];
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
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <Tab key={tab.id} tab={tab} />
        ))}
      </ul>
      <Page />
    </>
  );
};
