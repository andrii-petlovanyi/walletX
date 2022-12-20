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

export const SwitchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

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
