import styled from 'styled-components';
import { device } from 'components/Layout/styled';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 55%;
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

export const newStyles = {
  container: styles => ({
    ...styles,
  }),
  control: styles => ({
    ...styles,
    width: '100%',
    borderColor: '#ffffff',
    borderBottom: '1px solid #E0E0E0',
    cursor: 'pointer',
  }),

  valueContainer: styles => ({
    ...styles,
    padding: '8px 20px',
    margin: 0,
  }),

  input: styles => ({
    ...styles,
    padding: 0,
    margin: 0,
  }),
  menu: styles => ({
    ...styles,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(25px)',
    borderRadius: 20,
    outline: 0,
  }),
  placeholder: styles => ({
    ...styles,
    padding: 0,
    margin: 0,
    color: '#bdbdbd',
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    color: isFocused ? '#FF6596' : isSelected ? '#FF6596' : undefined,
    backgroundColor: isFocused ? '#ffffff' : isSelected ? '#ffffff' : undefined,
    cursor: 'pointer',
    borderRadius: isFocused ? '0' : isSelected ? '0' : undefined,
    fontFamily: 'Circe',
    fontWeight: isFocused ? '700' : isSelected ? '700' : '400',
    fontSize: 18,
    lineHeight: 1.5,
    display: 'flex',
    alignItems: 'center',
  }),
};

export const InputBalance = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
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
`;

export const ErrorText = styled.p`
  margin-left: 8px;
  color: red;
`;

export const TextareaComment = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  margin-top: 40px;
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
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover,
  &:active {
    background: var(--income-cl);
    color: var(--main-bg-cl);
    border-color: var(--income-cl);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
`;

export const ButtonClose = styled.button`
  /* display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--main-text-cl);
  width: 16px;
  height: 16px;
  font-size: 25px;
  border-radius: 10px;
  border-color: red;
  background: none;
  & svg {
    margin-right: 0;
  } */
`;
