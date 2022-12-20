import styled from 'styled-components';

const BalanceWrap = styled.div`
  padding-top: 8px;
  padding-left: 40px;
  padding-bottom: 11px;
  margin-bottom: 32px;
  width: 395px;
  height: 80px;
  background-color: var(--main-bg-cl);
  border-radius: 30px;
`;

export const Title = styled.p`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #a6a6a6;
`;
export const CurrentBalance = styled.div`
  display: flex;
  gap: 3px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  color: var(--main-text-cl);
`;
export const Text = styled.p`
  font-weight: 700;
`;

const styles = { BalanceWrap, Title, CurrentBalance, Text };
export default styles;
