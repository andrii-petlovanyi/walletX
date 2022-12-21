import React from 'react';
import styles from './styled';

const Container = ({children}) => {
  const { ContainerStyled } = styles;
    return <ContainerStyled>{children }</ContainerStyled>;
};
export default Container;
