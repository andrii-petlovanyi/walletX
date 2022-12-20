import 'react-datetime/css/react-datetime.css';
import { useState } from 'react';
import Datetime from 'react-datetime';
import iconCalendar from 'images/modal/symbol-defs.svg';

import { DatetimeIcon, DatetimeWrapper } from './styled';

const DatetimePicker = () => {
  const [date, setDate] = useState([new Date()]);
  return (
    <DatetimeWrapper>
      <Datetime dateFormat="DD.MM.YYYY" timeFormat={false} value={date} />
      {/* <RiCalendar2Fill /> */}
    </DatetimeWrapper>
  );
};
export default DatetimePicker;
