import React from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/auth-operations';
import styles from './slyled';

const ModalExit = ({ handleClose }) => {
  const { ModalStyled, ButtonWrap, ButtonYes, ButtonNo } = styles;
  const dispatch = useDispatch();

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
