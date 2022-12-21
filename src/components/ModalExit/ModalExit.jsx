import React from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/auth-operations';

import styles from './slyled';
const ModalExit = ({ handleClose }) => {
  const { ModalStyled, ButtonWrap, ButtonYes, ButtonNo } = styles;

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
          <ButtonYes
            type="button"
            onClick={() => dispatch(operations.signOut())}
          >
            Yes
          </ButtonYes>
          <ButtonNo onClick={() => handleClose()}>No</ButtonNo>
        </ButtonWrap>
      </ModalStyled>
    </div>
  );
};
export default ModalExit;
