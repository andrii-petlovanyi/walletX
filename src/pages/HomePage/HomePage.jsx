import ModalWindow from 'components/ModalWindow/ModalWindow/ModalWindow';
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
    </>
  );
};

export default HomePage;
