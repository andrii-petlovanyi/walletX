import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import getCategory from 'redux/category/category-operations';
import { selectCategory } from 'redux/category/category-selectors';
import operations from 'redux/transactions/transactions-operations';
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
  const [balance, setBalance] = useState(null);
  const [comment, setComment] = useState('');
  const [date, setDate] = useState();
  // const [date, setDate] = useState(new Date());
  const categories = useSelector(selectCategory);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);


  console.log(balance);
  // console.log(comment);
  const findCategory = value => {
    return categories.find(category => category.name === value);
  };

  useEffect(() => {
    if (!isLoggedIn) return;

    dispatch(getCategory());
  }, [dispatch, isLoggedIn]);

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   console.log(e.target.name, e.target.value);
  //   if (name === 'comment') {
  //     setComment(value);
  //   }
  //   if (name === 'balance') {
  //     setBalance(value);
  //   }
  // };

  const onSubmit = e => {
    e.preventDefault();
    const categoryData = findCategory(checked ? selected : 'Income');

    const transaction = {
      amount:
        categoryData.type === 'EXPENSE'
          ? Number(e.target.elements.balance.value) * -1
          : Number(e.target.elements.balance.value),
      transactionDate: date,
      type: categoryData.type,
      categoryId: categoryData.id,
      comment: comment,
    };
    console.log(transaction);
    dispatch(operations.createTransaction(transaction));
    reset();
  };

  const reset = () => {
    setSelected(null);
    setBalance(null);
    setComment('');
    setDate('');
    setChecked(true);
  };

  return (
    <ModalWrapper>
      <form onSubmit={onSubmit}>
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
            // type="text"
            // pattern="[0-9]*"
            step="0.01"
            // value={balance}
            required
            // onChange={handleChange}
          />
          <DatetimePicker date={date} setDate={setDate} />
        </BalanceDateWrapper>
        <TextareaComment
          placeholder="Comment"
          name="comment"
          // onChange={handleChange}
        ></TextareaComment>
        <Button>Add</Button>
        <Button>Cancel</Button>
      </form>
    </ModalWrapper>
  );
};
export default ModalWindow;
