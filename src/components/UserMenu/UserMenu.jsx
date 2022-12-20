import React from 'react';
import exit from 'img/exit.svg';
import styles from 'components/UserMenu/styled';

const UserMenu = () => {
  const { UserMenuStyled, UserName, ButtonExit } = styles;
  return (
    <UserMenuStyled>
      <UserName>Name </UserName>
      <ButtonExit type="button">
        {/*  onClick={() => dispatch(logOut())} */}
        <img src={exit} alt="exit" />
        Exit
      </ButtonExit>
    </UserMenuStyled>
  );
};
export default UserMenu;
