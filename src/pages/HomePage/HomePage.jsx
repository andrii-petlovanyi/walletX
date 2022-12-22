import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalWindow from 'components/ModalWindow/ModalAddTransaction/ModalAddTransaction';
import TransactionsListDesktop from 'components/TransactionsListDesktop/TransactionsListDesktop';
import TransactionsListMobile from 'components/TransactionsListMobile/TransactionsListMobile';
import { useMedia } from 'react-use';
import { ListBox } from './HomePage.styled';

const HomePage = () => {
  const isWide = useMedia('(min-width: 768px)');
  return (
    <>
      <ListBox>
        {isWide ? <TransactionsListDesktop /> : <TransactionsListMobile />}
      </ListBox>
      <ModalWindow />
      <ToastContainer />
    </>
  );
};

export default HomePage;
