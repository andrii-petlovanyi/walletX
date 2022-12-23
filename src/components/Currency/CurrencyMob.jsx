import Currency from './Currency';
import { useMedia } from 'react-use';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CurrencyMob = () => {
  const isMob = useMedia('(max-width: 767px)');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/currency' && !isMob) return navigate('/');
  }, [isMob, location.pathname, navigate]);
  return (
    <>
      <Currency />
    </>
  );
};

export default CurrencyMob;
