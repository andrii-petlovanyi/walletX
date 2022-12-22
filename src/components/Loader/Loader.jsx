import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import LoaderStyled from './styled';

function Loader() {
  return (
    <LoaderStyled>
      <ThreeDots
        height="40"
        width="40"
        radius="9"
        color="#4A56E2"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderStyled>
  );
}
export default Loader;
