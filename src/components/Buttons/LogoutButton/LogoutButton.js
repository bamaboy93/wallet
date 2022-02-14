import s from "./LogoutButton.module.scss";
import sprite from "../../../images/svg_sprite.svg";
import { useMediaQuery } from "../../../hooks/mediaQuery";
import { mediaBreakpoints } from "../../../assets/constants";

const LogoutButton = ({ onClick }) => {
  const minDesktop = useMediaQuery(mediaBreakpoints.minDesktop);
  return (
    <button className={s.button} onClick={onClick}>
      <svg className={s.iconExit} width="18px" height="18px">
        <use href={sprite + "#icon-exit"}></use>
      </svg>
      {minDesktop && <span className={s.text}>Выйти</span>}
    </button>
  );
};

export default LogoutButton;
