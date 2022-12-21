import ButtonAddTransaction from 'components/ButtonAddTransaction/ButtonAddTransaction';
import ModalWindow from 'components/ModalWindow/ModalWindow/ModalWindow';
import TransactionsListDesktop from 'components/TransactionsListDesktop/TransactionsListDesktop';
import TransactionsListMobile from 'components/TransactionsListMobile/TransactionsListMobile';
import { useSelector } from 'react-redux';
import { selectOpenModal } from 'redux/transactions/transactions-selectors';

import { ListBox } from './HomePage.styled';

const HomePage = () => {
  const viewPortWith = window.innerWidth;
  const isModalOpen = useSelector(selectOpenModal);
  return (
    <>
      <ListBox>
        {viewPortWith < 767.98 ? (
          <TransactionsListMobile />
        ) : (
          <TransactionsListDesktop />
        )}
        <ButtonAddTransaction />
      </ListBox>
      {isModalOpen && <ModalWindow />}
    </>
  );
};

export default HomePage;
