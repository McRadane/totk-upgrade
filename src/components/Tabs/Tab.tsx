import { FC, useCallback } from "react";
import { IRootState } from "../../configureStore";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../reducers/navigation";

export interface ITabProps {
  tab: { id: number; title: string; page: () => JSX.Element };
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
        className={`nav-link ${tab.id === activePage ? "active" : ""}`}
        aria-current={tab.id === activePage ? "page" : undefined}
        href="#"
        onClick={setActivePage}
      >
        {tab.title}
      </a>
    </li>
  );
};
