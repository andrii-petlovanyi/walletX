import React from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/auth-operations';
import { ModalStyled, ButtonWrap } from './slyled';

const ModalExit = ({ handleClose }) => {
  const dispatch = useDispatch();

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
