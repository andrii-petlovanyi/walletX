import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import iconCalendar from 'images/modal/symbol-defs.svg';
import { Icon, DatetimeWrapper } from './styled';

const DatetimePicker = ({ date, setDate, setError }) => {
  // const [date, setDate] = useState([new Date()]);
  // const [isOpen, setIsOpen] = useState(false);
  let end = moment().subtract(0, 'day');
  let start = moment().subtract(1, 'year');
  let valid = function (current) {
    return current.isBefore(end) && current.isAfter(start);
  };

  const handleChange = dateObj => {
    setDate(dateObj._d);
    setError(prevState => {
      return { ...prevState, datePick: null };
    });
    // setIsOpen(false);
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
      />
      <Icon>
        <use href={iconCalendar + '#icon-date'}></use>
      </Icon>
    </DatetimeWrapper>
  );
};
export default DatetimePicker;
