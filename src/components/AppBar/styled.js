import styled from 'styled-components';

export const AppBar = styled.header`
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: var(--main-bg-cl);
`;
export const Nav = styled.nav`
  /* display: flex; */
`;
const styles = {
  AppBar,
  Nav,
};
export default styles;
