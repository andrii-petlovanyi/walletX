import { useDispatch } from 'react-redux';
import { openModal } from 'redux/transactions/transactions-slice';

const ButtonAddTransaction = () => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(openModal())}>
      add transaction
    </button>
  );
};

export default ButtonAddTransaction;
