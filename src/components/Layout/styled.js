import styled from 'styled-components';
// import elipsebl from 'img/elipsebl.svg';
// import elipsepn from 'img/elipsepn.svg';

const LayoutStyled = styled.div`
  padding-bottom: 12px;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100vh;

  background-color: var(--auth-bg-cl);
  background-image: url({elipsebl}), url({elipsepn});
  background-repeat: no-repeat;
  background-position: top right 130px, top 270px left 130px, center, 100px 60px,
    center;
`;
const styles = { LayoutStyled, Wrapper };
export default styles;
