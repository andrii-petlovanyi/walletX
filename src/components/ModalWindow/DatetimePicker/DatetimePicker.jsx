import 'react-datetime/css/react-datetime.css';
// import { useState } from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import iconCalendar from 'images/modal/symbol-defs.svg';
import { Icon, DatetimeWrapper } from './styled';

const DatetimePicker = ({ date, setDate }) => {
  // const [date, setDate] = useState([new Date()]);
  // const [isOpen, setIsOpen] = useState(false);
  let end = moment().subtract(0, 'day');
  let start = moment().subtract(1, 'year');
  let valid = function (current) {
    return current.isBefore(end) && current.isAfter(start);
  };

  const handleChange = dateObj => {
    setDate(dateObj._d);
    // setIsOpen(false);
  };

  return (
    <DatetimeWrapper
    // onClick={() => !setIsOpen()}
    // htmlFor="date" name="date"
    >
      <Datetime
        // id="date"
        name="date"
        dateFormat="DD.MM.YYYY"
        // open={isOpen}
        timeFormat={false}
        required
        value={date}
        isValidDate={valid}
        onChange={handleChange}
      />
      <Icon>
        <use href={iconCalendar + '#icon-date'}></use>
      </Icon>
    </DatetimeWrapper>
  );
};
export default DatetimePicker;
