import React, { useState } from 'react';
import styles from 'components/UserMenu/styled';
import { IoExitOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import ModalExit from 'components/ModalExit/ModalExit';
const UserMenu = () => {
  const { UserMenuStyled, UserName, ButtonExit } = styles;
  const name = useSelector(state => state);
  console.log(name);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <UserMenuStyled>
        <UserName>Name </UserName>
        <ButtonExit type="button" onClick={handleShow}>
          <IoExitOutline size={20} />
          <span>Exit</span>
        </ButtonExit>
      </UserMenuStyled>
      {show && <ModalExit show={show} handleClose={handleClose} />}
    </>
  );
};
export default UserMenu;
