import { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import {
  Button,
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
      <Input placeholder="0.00" />
      <Datetime
        dateFormat="DD.MM.YYYY"
        timeFormat={false}
        inputProps={{
          style: {
            width: '280px',
            height: '32px',
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '1.5',
            color: 'var(--main-text-cl)',
            borderTop: 'inherit',
            borderRight: 'inherit',
            borderLeft: 'inherit',
            borderBottom: '1px solid #e0e0e0',
          },
        }}
        value={date}
      />
      <Textarea placeholder="Comment"></Textarea>
      <Button>Add</Button>
      <Button>Cancel</Button>
    </ModalWrapper>
  );
};
export default ModalWindow;
