import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import iconCalendar from 'images/modal/symbol-defs.svg';
import { Icon, DatetimeWrapper } from './styled';
import { useRef } from 'react';

const DatetimePicker = ({ date, setDate, setError }) => {
  let end = moment().subtract(0, 'day');
  let start = moment().subtract(1, 'year');
  let valid = function (current) {
    return current.isBefore(end) && current.isAfter(start);
  };

  //not good case
  const datetimeRef = useRef(null);

  const handleChange = dateObj => {
    setDate(dateObj._d);
    setError(prevState => {
      return { ...prevState, datePick: null };
    });

    //not good case
    setTimeout(() => datetimeRef.current._closeCalendar(), 0);
  };

  return (
    <DatetimeWrapper>
      <Datetime
        name="date"
        dateFormat="DD.MM.YYYY"
        timeFormat={false}
        value={date}
        isValidDate={valid}
        onChange={handleChange}
        closeOnSelect={true}
        ref={datetimeRef}
      />
      <Icon>
        <use href={iconCalendar + '#icon-date'}></use>
      </Icon>
    </DatetimeWrapper>
  );
};
export default DatetimePicker;
