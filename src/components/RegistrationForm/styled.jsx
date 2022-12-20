import styled from 'styled-components';

export const FormStyed = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 533px;
  height: 616px;
  background-color: white;
  padding: 40px 59px 66px 65px;
  border-radius: 20px;
  input {
    height: 32px;
    max-width: 410px;
    border: none;
    border-bottom: 1px solid rgba(33, 33, 33, 0.2);
    outline: none;
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
