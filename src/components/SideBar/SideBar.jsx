import React from 'react';
import { useMedia } from 'react-use';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import styles from 'components/SideBar/styled';
import NavTab from 'components/NavTab/NavTab';
import NavMob from 'components/NavMob/NavMob';

export const SideBar = () => {
  const { SideBarWrapper, NavWrap,StyledWrap } = styles;
  const isWide = useMedia('(min-width: 768px)');
  const isMob = useMedia('(max-width: 767px)');

  return (
    <SideBarWrapper>
      <NavWrap>
        {isWide && (
          <>
            <StyledWrap>
              <NavTab />
              <Balance />
            </StyledWrap>
            <Currency />
          </>
        )}
        {isMob && <NavMob />}
      </NavWrap>
    </SideBarWrapper>
  );
};
