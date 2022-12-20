import 'react-datetime/css/react-datetime.css';
import { useState } from 'react';
import Datetime from 'react-datetime';

import { DatetimeIcon, DatetimeWrapper } from './styled';

const DatetimePicker = () => {
  const [date, setDate] = useState([new Date()]);
  return (
    <DatetimeWrapper>
      <Datetime dateFormat="DD.MM.YYYY" timeFormat={false} value={date} />
      <DatetimeIcon>
        <use href="./images/symbol-defs.svg#icon-baseline-date_range-24px-1"></use>
      </DatetimeIcon>
    </DatetimeWrapper>
  );
};
export default DatetimePicker;
