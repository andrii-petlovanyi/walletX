import styled from 'styled-components';

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: var(--secondary-text-cl);
`;
export const UserName = styled.p`
  display: flex;
  align-items: center;

  :after {
    content: '';
    margin-left: 12px;
    margin-right: 12px;
    display: inline-block;
    height: 30px;
    border-right: 1px solid var(--secondary-text-cl);
  }
`;

export const ButtonExit = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: var(--secondary-text-cl);
  background-color: transparent;
  border: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: var(--main-text-cl);
  }
`;

const styles = { UserMenuStyled, UserName, ButtonExit };
export default styles;
