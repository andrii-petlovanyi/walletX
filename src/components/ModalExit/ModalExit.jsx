import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/auth-operations';
import { Overlay, ModalStyled, ButtonWrap } from './slyled';

const ModalExit = ({ handleClose }) => {
  const dispatch = useDispatch();
  // const handelKeyDown = useCallback(
  //   event => {
  //     if (event.code === 'Escape') {
  //       console.log(event.code);
  //       handleClose();
  //     }
  //   },
  //   [handleClose]
  // );
  // const handelBackDropClick = event => {
  //   if (event.currentTarget === event.target) {
  //     handleClose();
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('keydown', handelKeyDown);

  //   return () => {
  //     window.removeEventListener('keydown', handelKeyDown);
  //   };
  // }, [handelKeyDown]);
  return (
    <div>
      <ModalStyled>
        <p>you really wanted to exit</p>
        <ButtonWrap>
          <button type="button" onClick={() => dispatch(operations.signOut())}>
            Yes
          </button>
          <button onClick={() => handleClose()}>No</button>
        </ButtonWrap>
      </ModalStyled>
    </div>
  );
};
export default ModalExit;
