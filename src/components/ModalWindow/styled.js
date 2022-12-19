import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '480px',
  tablet: '768px',
  desktop: '1280px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: '100vw';
  height: '100vh';
  /* padding-right: 10px;
  padding-left: 10px;
  padding-top: 20px;
  padding-bottom: 37px; */
  @media ${device.tablet} {
    max-width: 540px;
    /* padding: 40px 73px; */
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

export const SwitchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const TextIncome = styled.p`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-align: right;
  color: #e0e0e0;
`;

export const TextExpense = styled.p`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-align: right;
  color: #e0e0e0;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 280px;
  height: 32px;
  padding: 8px 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: var(--secondary-text-cl);
  border-top: inherit;
  border-right: inherit;
  border-left: inherit;
  border-bottom: 1px solid #e0e0e0;
`;

export const Textarea = styled.textarea`
  width: 100%;
  max-width: 280px;
  height: 84px;
  padding: 10px 20px;
  margin-top: 40px;
  margin-bottom: 40px;
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
    padding: 10px 8px;
  }
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
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
  &:hover,
  &:active {
    background: var(--income-cl);
    color: var(--main-bg-cl);
  }
`;

// export const Datetime = styled(Datetime)`
//   width: 280px;
//   height: 32px;
//   font-family: 'Circe';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 1.5;
//   color: var(--main-text-cl);
// `;
