import styled from 'styled-components';

// ========  Button Add Transaction  ==========

export const IconAddTrans = styled.img`
  width: 20px;
  height: 20px;
  color: white;
  margin: auto;
`;

export const ButtonAddTrans = styled.button`
  cursor: pointer;
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 44px;
  height: 44px;
  background-color: #24cca7;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    font-size: 30px;
    color: white;
  }

  &:hover,
  &:focus {
    background-color: #04ac97;
  }
  @media screen and (min-width: 1280px) {
    right: 40px;
    bottom: 40px;

    [data-scroll-lock] & {
      right: 57px;
    }
  }
`;
