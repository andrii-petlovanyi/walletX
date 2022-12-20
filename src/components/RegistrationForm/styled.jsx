import styled from 'styled-components';

export const FormStyed = styled.form`
  label {
    height: 32px;
    width: 410px;
    position: relative;
  }
  display: flex;
  flex-wrap: wrap;
  width: 533px;
  height: 616px;
  background-color: white;
  padding: 40px 59px 66px 65px;
  border-radius: 20px;
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

export const IndicatorBar = styled.div`
  margin-top: 5px;

  /* width: 50%; */
  /* background-color: #24cca7; */
  border-radius: 2px;
  /* border: 2px solid #24cca7;
  box-shadow: 0px 1px 8px rgba(36, 204, 167, 0.5); */

  background-color: yellow;
  border: 2px solid yellow;
  box-shadow: 0px 1px 8px rgba(214, 211, 29, 0.5);
`;
