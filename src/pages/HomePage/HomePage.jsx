import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalAddTransaction from 'components/ModalWindow/ModalAddTransaction/ModalAddTransaction';
import TransactionsListDesktop from 'components/TransactionsListDesktop/TransactionsListDesktop';
import TransactionsListMobile from 'components/TransactionsListMobile/TransactionsListMobile';
import { useMedia } from 'react-use';
import { ListBox } from './HomePage.styled';
import Balance from 'components/Balance/Balance';
import SectionAnim from 'components/Animations/SectionAnim';

const HomePage = () => {
  const isWide = useMedia('(min-width: 768px)');
  const isMob = useMedia('(max-width: 767px)');

  return (
    <>
      {isMob && (
        <SectionAnim delay={0.2}>
          <Balance />
        </SectionAnim>
      )}
      <SectionAnim delay={0.3}>
        <ListBox>
          {isWide ? <TransactionsListDesktop /> : <TransactionsListMobile />}
        </ListBox>
      </SectionAnim>
      <ModalAddTransaction />
      <ToastContainer />
    </>
  );
};

export default HomePage;
