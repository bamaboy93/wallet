import PropTypes from "prop-types";

import s from "./Balance.module.scss";

const BalanceComponent = ({ totalBalance }) => {
  return (
    <div className={s.balanceContainer}>
      <p className={s.balanceHeadline}>Ваш баланс</p>
      <p className={s.balanceCount}>₴ {totalBalance}</p>
    </div>
  );
};

BalanceComponent.defaultProps = {
  totalBalance: 0,
};

BalanceComponent.propTypes = {
  totalBalance: PropTypes.number.isRequired,
};

export default BalanceComponent;
