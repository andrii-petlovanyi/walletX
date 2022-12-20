import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  color: var(--main-text-cl);
`;

export default LogoStyled;
