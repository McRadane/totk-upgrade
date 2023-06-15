import { type FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPage } from "../../redux/navigation";
import type { IRootState } from "../../redux/store";

export interface ITabProps {
  tab: { id: number; page: () => JSX.Element; title: string };
}

export const Tab: FC<ITabProps> = ({ tab }) => {
  const activePage = useSelector((state: IRootState) => state.navigation.page);
  const dispatch = useDispatch();

  const setActivePage = useCallback(() => {
    dispatch(setPage(tab.id));
  }, [dispatch, tab.id]);

  return (
    <li className="nav-item">
      <a
        aria-current={tab.id === activePage ? "page" : undefined}
        className={`nav-link ${tab.id === activePage ? "active" : ""}`}
        href="#"
        onClick={setActivePage}
      >
        {tab.title}
      </a>
    </li>
  );
};
