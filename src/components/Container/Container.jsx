import s from "../Container/Container.module.scss";

const Container = ({ children }) => (
  <div className={s.container}>{children} </div>
);

export default Container;
