import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getCategory from 'redux/transactions/transactions-selectors';
import DatetimePicker from '../DatetimePicker/DatetimePicker';
import {
  BalanceDateWrapper,
  Button,
  Input,
  ModalTitle,
  ModalWrapper,
  TextareaComment,
} from '../styled';
import SwitchModal from '../SwitchModal/SwitchModal';

const ModalWindow = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  return (
    <ModalWrapper>
      <ModalTitle>Add transaction</ModalTitle>
      <SwitchModal />
      <BalanceDateWrapper htmlFor="balance">
        <Input name="balance" id="balance" placeholder="0.00" />
        <DatetimePicker />
      </BalanceDateWrapper>

      <TextareaComment placeholder="Comment"></TextareaComment>

      <Button>Add</Button>
      <Button>Cancel</Button>
    </ModalWrapper>
  );
};
export default ModalWindow;
