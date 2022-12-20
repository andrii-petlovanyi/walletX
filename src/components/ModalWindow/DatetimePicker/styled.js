import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '480px',
  tablet: '768px',
  desktop: '1280px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const DatetimeWrapper = styled.label`
  display: flex;
  gap: 20px;

  /* max-width: 280px;
  height: '32px';
  padding: 8px 20px;
  border-top: none;
  border-bottom: '1px solid #e0e0e0';
  max-width: 180px;
  @media ${device.tablet} {
    max-width: 180px; */
`;

export const Datetime = styled.input`
  font-family: 'Circe';
  font-style: 'normal';
  font-weight: '400';
  font-size: '18px';
  line-height: '1.5';
  color: 'var(--main-text-cl)';
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--accent-active-cl);
`;
