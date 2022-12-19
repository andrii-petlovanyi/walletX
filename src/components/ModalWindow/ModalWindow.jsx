import { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import {
  BalanceDateWrapper,
  Button,
  DatetimeWrapper,
  Input,
  ModalTitle,
  ModalWrapper,
  SwitchWrapper,
  Textarea,
  TextExpense,
  TextIncome,
} from './styled';

const ModalWindow = () => {
  const [date, setDate] = useState([new Date()]);
  return (
    <ModalWrapper>
      <ModalTitle>Add transaction</ModalTitle>
      <SwitchWrapper>
        <TextIncome>Income</TextIncome>
        <TextExpense>Expense</TextExpense>
      </SwitchWrapper>
      <BalanceDateWrapper>
        <Input placeholder="0.00" />
        <DatetimeWrapper>
          <Datetime dateFormat="DD.MM.YYYY" timeFormat={false} value={date} />
          <svg width="24" height="24">
            <use href="symbol-defs.svg#icon-baseline-date_range-24px-1"></use>
          </svg>
        </DatetimeWrapper>
      </BalanceDateWrapper>

      <Textarea placeholder="Comment"></Textarea>
      <Button>Add</Button>
      <Button>Cancel</Button>
    </ModalWrapper>
  );
};
export default ModalWindow;
