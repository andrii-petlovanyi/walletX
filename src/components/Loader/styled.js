import styled from 'styled-components';
import device from 'components/Layout/styled';
const LoaderStyled = styled.div`
  min-width: 280px;
  @media ${device.desktop} {
    max-width: 393px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;
export default LoaderStyled;
