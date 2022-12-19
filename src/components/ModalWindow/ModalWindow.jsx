import DatetimePicker from './DatetimePicker';
import {
  BalanceDateWrapper,
  Button,
  Input,
  ModalTitle,
  ModalWrapper,
  TextareaComment,
} from './styled';
import SwitchModal from './SwitchModal';

const ModalWindow = () => {
  return (
    <ModalWrapper>
      <ModalTitle>Add transaction</ModalTitle>
      <SwitchModal />
      <BalanceDateWrapper>
        <Input placeholder="0.00" />
        <DatetimePicker />
      </BalanceDateWrapper>

      <TextareaComment placeholder="Comment"></TextareaComment>

      <Button>Add</Button>
      <Button>Cancel</Button>
    </ModalWrapper>
  );
};
export default ModalWindow;
