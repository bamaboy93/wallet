import s from "./Logo.module.scss";
import sprite from "../../../images/svg_sprite.svg";
const Logo = () => {
  return (
    <div className={s.LogoContainer}>
      <svg className={s.logo}>
        <use href={sprite + "#icon-wallet"}></use>
      </svg>
      <p className={s.logoText}>Wallet</p>
    </div>
  );
};

export default Logo;
