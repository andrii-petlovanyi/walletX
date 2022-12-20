import styled from 'styled-components';
import elipsebl from 'img/elipsebl.svg';
import elipsepn from 'img/elipsepn.svg';

const LayoutStyled = styled.div`
  padding-bottom: 12px;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: #e7eaf2;
  /* background-color: rgba(255, 255, 255, 0.4); */
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  background-image: url(${elipsebl}), url(${elipsepn});
  background-repeat: no-repeat;
  background-position: bottom 0 left 0, top 0 right 0;
`;

const styles = { LayoutStyled, Wrapper };
export default styles;
