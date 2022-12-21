import styled from 'styled-components';
import { device } from 'components/Layout/styled';

const AppBarStyled = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-bg-cl);
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
const Wrap = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 15px 20px;

  @media ${device.tablet} {
    max-width: 768px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 32px;
  }
  @media ${device.desktop} {
    max-width: 1280px;
    padding: 20px 16px;
  }
`;
export const Nav = styled.nav`
  /* display: flex; */
`;
const styles = {
  AppBarStyled,
  Nav,
  Wrap,
};
export default styles;
