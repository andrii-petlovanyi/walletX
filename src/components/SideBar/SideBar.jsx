import React from 'react';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import styles from 'components/SideBar/styled';
import NavTab from 'components/NavTab/NavTab';
import NavMob from 'components/NavMob/NavMob';

export const SideBar = () => {
  const { SideBarWrapper, NavWrap } = styles;
  const viewPortWidth = window.innerWidth;
  return (
    <SideBarWrapper>
      <NavWrap>
        {viewPortWidth < 767.98 ? <NavMob /> : <NavTab />}
        <Balance />
      </NavWrap>
      {viewPortWidth > 767.98 && <Currency />}
    </SideBarWrapper>
  );
};
