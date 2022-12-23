import styled from 'styled-components';
import { device } from 'components/Layout/styled';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: '100vw';
  height: '100vh';
  padding: 20px;
  background-color: var(--main-bg-cl);
  @media ${device.tablet} {
    top: 50%;
    width: 540px;
    height: 603px;
    border-radius: 20px;
    padding: 0;
  }
`;

export const ModalTitle = styled.h1`
  margin-bottom: 40px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  color: var(--main-text-cl);
  @media ${device.tablet} {
    font-size: 30px;
    line-height: 1.5;
  }
`;

export const InputBalance = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 32px;
  padding: 8px 20px;
  font-family: 'Circe';
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: 'var(--main-text-cl)';
  border-top: inherit;
  border-right: inherit;
  border-left: inherit;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  &::placeholder {
    color: var(--secondary-text-cl);
  }
  @media ${device.tablet} {
    width: 190px;
    margin: 0;
    margin-right: 30px;
  }
`;

export const BalanceDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 394px;
    margin-top: 40px;
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const ErrorText = styled.p`
  padding: 5px 20px;
  color: red;
`;

export const TextareaComment = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  margin-bottom: 40px;
  width: 100%;
  height: 84px;
  resize: none;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: var(--main-text-cl);
  border-top: inherit;
  border-right: inherit;
  border-left: inherit;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  &::placeholder {
    color: var(--secondary-text-cl);
  }
  @media ${device.tablet} {
    max-width: 394px;
    max-height: 32px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;
  border: 1px solid var(--accent-active-cl);
  border-radius: 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: var(--main-bg-cl);
  color: var(--accent-active-cl);
  /* .button__add {
    background: '#24cca7';
    color: '#ffffff';
    border-color: '#24cca7';
  } */
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Overlay = styled.div`
  @media ${device.tablet} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
  background: none;
  font-size: 20px;
  border: none;
  @media ${device.tablet} {
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    font-size: 25px;
  }
`;
