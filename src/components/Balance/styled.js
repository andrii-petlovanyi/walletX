import styled from 'styled-components';
import { device } from 'components/Layout/styled';

const BalanceWrap = styled.div`
  padding-top: 8px;
  padding-left: 40px;
  padding-bottom: 11px;
  background-color: var(--main-bg-cl);
  border-radius: 30px;
  max-width: 280px;
  margin: 0 auto;
  margin-top: 12px;
  margin-bottom: 32px;

  @media ${device.tablet} {
    min-width: 336px;
    margin: 0;
  }
  @media ${device.desktop} {
    min-width: 395px;
    margin-bottom: 32px;
  }
`;

const Title = styled.p`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #a6a6a6;
`;
const CurrentBalance = styled.div`
  display: flex;
  gap: 3px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  color: var(--main-text-cl);
`;
const Text = styled.p`
  font-weight: 700;
`;

const styles = { BalanceWrap, Title, CurrentBalance, Text };
export default styles;
