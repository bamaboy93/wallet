import { useSelector } from "react-redux";
// import Navigation from "./Navigation";
import Currency from "../Currency/Currency";
import Balance from "../Balance/Balance";
import authSelectors from "../../redux/auth/auth-selectors";
import MediaQuery from "react-responsive";
import s from "./Sidebar.module.scss";

const Sidebar = () => {
  const totalBalance = useSelector((state) => authSelectors.getBalance(state));

  return (
    <aside className={s.sidebar}>
      <div className={s.balance}>
        <Balance totalBalance={totalBalance} />
      </div>

      <MediaQuery minWidth={768}>
        <Currency />
      </MediaQuery>
    </aside>
  );
};

export default Sidebar;
