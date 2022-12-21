import React, { useState } from 'react';
import styles from 'components/UserMenu/styled';
import { TbLogout } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import ModalExit from 'components/ModalExit/ModalExit';
import authSelectors from 'redux/auth/auth-selectors';
import { IconContext } from 'react-icons';
const UserMenu = () => {
  const { UserMenuStyled, UserName, ButtonExit } = styles;
  const { getUserName } = authSelectors;
  const name = useSelector(getUserName);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const viewPortWidth = window.innerWidth;
  console.log(viewPortWidth);
  return (
    <>
      <UserMenuStyled>
        <UserName>{name}</UserName>
        <ButtonExit type="button" onClick={handleShow}>
          <IconContext.Provider value={{ className: 'icon' }}>
            <TbLogout />
          </IconContext.Provider>
          {viewPortWidth > 767.98 && <span>Exit</span>}
        </ButtonExit>
        {show && <ModalExit show={show} handleClose={handleClose} />}
      </UserMenuStyled>
    </>
  );
};
export default UserMenu;
