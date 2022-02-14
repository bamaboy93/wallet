import { useState } from "react";
import Logo from "./Logo";
import UserMenu from "./UserMenu/UserMenu";
// import PopupLogout from "./PopupLogout";
// import UserInfoPopup from "./UserInfoPopup";
import s from "./Header.module.scss";

const HeaderComponent = () => {
  //   const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  //   const [isUserInfoPopup, setIsUserInfoPopup] = useState(false);

  //   const toggleModal = () => {
  //     setIsModalLogoutOpen(!isModalLogoutOpen);
  //   };

  //   const toggleUserInfoPopup = () => {
  //     setIsUserInfoPopup(!isUserInfoPopup);
  //   };

  return (
    <div className={s.background}>
      <div className={s.headerContainer}>
        <Logo />
        <UserMenu
        //   onClick={toggleModal}
        //   onClickUserInfoButton={toggleUserInfoPopup}
        />
        {/* {isUserInfoPopup && <UserInfoPopup onClose={toggleUserInfoPopup} />}
        {isModalLogoutOpen && <PopupLogout onClose={toggleModal} />} */}
      </div>
    </div>
  );
};

export default HeaderComponent;
