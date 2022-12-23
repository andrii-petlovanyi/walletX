import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from 'components/Layout/styled';

export const FormStyed = styled.form`
  max-width: 480px;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  padding: 40px 59px 66px 65px;

  @media ${device.tablet} {
    width: 533px;
    height: 616px;
    border-radius: 20px;
  }

  div {
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  label {
    height: 32px;
    width: 100%;
    position: relative;
    margin-bottom: 40px;
  }
  h1 {
  }
  input {
    display: block;
    padding-left: 40px;
    height: 32px;
    width: 100%;
    border: none;
    border-bottom: 1px solid rgba(33, 33, 33, 0.2);
    outline: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
    ::placeholder {
      font-family: 'Circe';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      color: #bdbdbd;
    }
  }
  button {
    width: 100%;
    @media ${device.mobileM} {
      width: 300px;
    }
    margin: 0 auto;
    margin-bottom: 20px;
    height: 50px;
    border: none;
    background: #24cca7;
    border-radius: 20px;
    color: #ffffff;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    :hover {
      background: #307957;
      cursor: pointer;
    }
  }
`;

export const ImgStyed = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
`;

export const LinkStyled = styled(Link)`
  width: 100%;
  @media ${device.mobileM} {
    width: 300px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  height: 50px;
  border: 1px solid #4a56e2;
  background: #fff;
  border-radius: 20px;
  color: #4a56e2;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  :hover {
    cursor: pointer;
  }
`;
