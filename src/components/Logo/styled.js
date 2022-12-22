import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from 'components/Layout/styled';

const LogoStyled = styled(Link)`
  display: flex;
  gap: 15px;
  align-items: center;
  font-family: 'Poppins';
  font-style: normal;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--main-text-cl);
  @media ${device.tablet} {
    gap: 20px;
    font-size: 30px;
  }
`;

export default LogoStyled;
