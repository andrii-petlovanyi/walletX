import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormStyed = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 533px;
  height: 616px;
  background-color: white;
  padding: 40px 59px 66px 65px;
  border-radius: 20px;
  div {
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  label {
    height: 32px;
    width: 410px;
    position: relative;
  }
  h1 {
  }
  input {
    display: block;
    padding-left: 40px;
    height: 32px;
    width: 410px;

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
    margin: 0 auto;
    width: 300px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 300px;
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
