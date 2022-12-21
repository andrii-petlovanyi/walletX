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

// export const ModalTitle = styled.h1`
//   margin-bottom: 40px;
//   font-family: 'Poppins';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 24px;
//   line-height: 1.5;
//   text-align: center;
//   color: var(--main-text-cl);
//   @media ${device.tablet} {
//     font-size: 30px;
//     line-height: 1.5;
//   }
// `;

export const SwitchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 40px;
  width: 100%;
  max-width: 280px;
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

export const BalanceDateWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    justify-content: baseline;
    /* align-items: center; */
  }
`;

export const TextareaComment = styled.textarea`
  width: 100%;
  max-width: 280px;
  height: 84px;
  resize: none;
  padding-left: 20px;
  padding-right: 20px;
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
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;
  margin-top: 20px;
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
    border-color: var(--income-cl);
  }
`;

export const DatetimeWrapper = styled.label`
  display: flex;
  /* gap: 20px; */
  /* max-width: 280px;
  height: '32px';
  padding: 8px 20px;
  border-top: none;
  border-bottom: '1px solid #e0e0e0';
  max-width: 180px;
  @media ${device.tablet} {
    max-width: 180px;
  } */
`;

export const Datetime = styled.input`
  /* padding: 8px 20px; */
  font-family: 'Circe';
  font-style: 'normal';
  font-weight: '400';
  font-size: '18px';
  line-height: '1.5';
  color: 'var(--main-text-cl)';
`;

// export const DatetimeIcon = styled.svg`
//   width: 24px;
//   height: 24px;
//   fill: var(--accent-active-cl);
//   color: var(--accent-active-cl);
// `;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  margin-right: 24px;
  margin-left: 24px;
  background: var(--main-bg-cl);
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  transition: 300ms all;
  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    top: 50%;
    width: 44px;
    height: 44px;
    background: ${p => p.switchColor};
    box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
    border-radius: 50px;
    transform: translate(0, -50%);
  }
`;

export const SwitchInput = styled.input`
  display: none;
  opacity: 0;
  position: absolute;
  width: 80px;
  height: 40px;
  margin-right: 24px;
  margin-left: 24px;
  border: 1px solid #e0e0e0;
  border-radius: 30px;

  &:checked + ${Switch} {
    background-color: var(--main-bg-cl);
    &:before {
      transform: translate(40px, -50%);
    }
  }
`;

export const TextIncome = styled.p`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-align: right;
  color: ${p => p.incomeColor};
`;

export const TextExpense = styled.p`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-align: right;
  color: ${p => p.expenseColor};
`;

export const SelectForm = styled.form``;

export const Label = styled.label`
  display: flex;
  .rdtPicker {
    display: none;
    position: absolute;
    min-width: 250px;
    padding: 4px;
    margin-top: 1px;
    z-index: 99999 !important;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #f9f9f9;
    background-color: red;
  }
`;
