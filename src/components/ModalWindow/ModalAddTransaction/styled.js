import styled from 'styled-components';
import { device } from 'components/Layout/styled';

// const size = {
//   mobileS: '320px',
//   mobileM: '480px',
//   tablet: '768px',
//   desktop: '1280px',
// };

// export const device = {
//   mobileS: `(min-width: ${size.mobileS})`,
//   mobileM: `(min-width: ${size.mobileM})`,
//   tablet: `(min-width: ${size.tablet})`,
//   desktop: `(min-width: ${size.desktop})`,
// };

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
  @media ${device.mobileM} {
    top: 50%;
    width: 540px;
    height: 508px;
    padding: 40px 73px;
    border-radius: 20px;
  }

  @media ${device.desktop} {
    width: 540px;
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
    margin: '0 auto',
    padding: '8 20',
    borderColor: '#ffffff',
    borderBottom: '1px solid #E0E0E0',
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
    fontFamily: 'Circe',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 1.5,
    color: '#BDBDBD',
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
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: 'var(--main-text-cl)';
  border-top: inherit;
  border-right: inherit;
  border-left: inherit;
  border-bottom: 1px solid #e0e0e0;
  @media ${device.tablet} {
    max-width: 190px;
    margin-bottom: 0;
  }
`;

export const BalanceDateWrapper = styled.label`
  /* @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  } */
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
  @media ${device.tablet} {
    max-width: 394px;
    max-height: 32px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

// export const IconClose = styled.svg`
//   width: 16px;
//   height: 16px;

//   color: var(--accent-active-cl);
// `;

export const ButtonClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--accent-active-cl);
  /* padding: 20px; */
  width: 30px;
  height: 30px;
  font-size: 25px;
  border-radius: 10px;
  border: 1px solid black;
  background: none;

  &:hover {
    color: red;
  }
  /* fill: var(--accent-active-cl); */
`;
