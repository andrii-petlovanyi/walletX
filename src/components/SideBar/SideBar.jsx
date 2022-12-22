import React from 'react';
import { useMedia } from 'react-use';
import { useLocation } from 'react-router';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import styles from 'components/SideBar/styled';
import NavTab from 'components/NavTab/NavTab';
import NavMob from 'components/NavMob/NavMob';

export const SideBar = () => {
  const { SideBarWrapper, NavWrap } = styles;
  const isWide = useMedia('(min-width: 768px)');

  const location = useLocation();
  return (
    <SideBarWrapper>
      <NavWrap>
        {isWide ? <NavTab /> : <NavMob />}
        {(isWide && <Balance />) ||
          (location.pathname !== '/currency' && <Balance />)}
      </NavWrap>
      {isWide && <Currency />}
    </SideBarWrapper>
  );
};
