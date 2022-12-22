import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalWindow from 'components/ModalWindow/ModalAddTransaction/ModalAddTransaction';
import TransactionsListDesktop from 'components/TransactionsListDesktop/TransactionsListDesktop';
import TransactionsListMobile from 'components/TransactionsListMobile/TransactionsListMobile';

import { ListBox } from './HomePage.styled';

const HomePage = () => {
  const viewPortWith = window.innerWidth;
  return (
    <>
      <ListBox>
        {viewPortWith < 767.98 ? (
          <TransactionsListMobile />
        ) : (
          <TransactionsListDesktop />
        )}
      </ListBox>
      <ModalWindow />
      <ToastContainer />
    </>
  );
};

export default HomePage;
