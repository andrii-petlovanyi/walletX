import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import getCategory from 'redux/category/category-operations';

import DatetimePicker from '../DatetimePicker/DatetimePicker';
import SelectCategory from '../SelectCategory/SelectCategory';
import {
  BalanceDateWrapper,
  Button,
  ModalTitle,
  ModalWrapper,
  TextareaComment,
} from '../styled';
import SwitchModal from '../SwitchModal/SwitchModal';
import { InputBalance } from './styled';

const ModalWindow = () => {
  const [checked, setChecked] = useState(true);
  const [selected, setSelected] = useState();
  const [balance, setBalance] = useState('');
  const [comment, setComment] = useState('');
  const [date, setDate] = useState();
  const dispatch = useDispatch();

  console.log(balance);
  console.log(comment);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(e.target.name, e.target.value);
    if (name === 'comment') {
      setComment(value);
    }
    if (name === 'balance') {
      setBalance(value);
    }
  };

  return (
    <ModalWrapper>
      <form>
        <ModalTitle>Add transaction</ModalTitle>
        <SwitchModal checked={checked} setChecked={setChecked} />
        {checked && (
          <SelectCategory selected={selected} setSelected={setSelected} />
        )}
        <BalanceDateWrapper htmlFor="balance">
          <InputBalance
            type="number"
            name="balance"
            id="balance"
            placeholder="0.00"
            onChange={handleChange}
          />
          <DatetimePicker date={date} setDate={setDate} />
        </BalanceDateWrapper>
        <TextareaComment
          placeholder="Comment"
          name="comment"
          onChange={handleChange}
        ></TextareaComment>
        <Button>Add</Button>
        <Button>Cancel</Button>
      </form>
    </ModalWrapper>
  );
};
export default ModalWindow;
