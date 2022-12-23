import styled from 'styled-components';
import { device } from 'components/Layout/styled';

// const size = {
//   mobileS: '320px',
//   mobileM: '480px',
//   tablet: '768px',
//   desktop: '1280px',
// };

// export const device = {
//   mobileS: `(min-width: ${size.mobileS})`,
//   mobileM: `(min-width: ${size.mobileM})`,
//   tablet: `(min-width: ${size.tablet})`,
//   desktop: `(min-width: ${size.desktop})`,
// };

export const DatetimeWrapper = styled.label`
  display: flex;
  justify-content: center;
  width: 100%;
  height: '32px';

  & .rdt {
    width: 100%;
    height: 32px;
  }
  & .form-control {
    width: 100%;
    height: 32px;
    padding: 8px 20px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #e0e0e0;
    font-family: 'Circe';
    font-style: 'normal';
    font-weight: '400';
    font-size: '18px';
    line-height: '1.5';
    color: 'var(--main-text-cl)';
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--accent-active-cl);
`;
