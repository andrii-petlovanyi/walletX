import React from 'react';
import exit from 'img/exit.svg';
import styles from 'components/UserMenu/styled';

const UserMenu = () => {
  return (
    <styles.UserMenu>
      <styles.UserName>Name </styles.UserName>
      <styles.ButtonExit type="button">
        {/*  onClick={() => dispatch(logOut())} */}
        <img src={exit} alt="exit" />
        Exit
      </styles.ButtonExit>
    </styles.UserMenu>
  );
};
export default UserMenu;
