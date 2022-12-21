import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import getCategory from 'redux/category/category-operations';
import { selectCategory } from 'redux/category/category-selectors';
import operations from 'redux/transactions/transactions-operations';
import { selectOpenModal } from 'redux/transactions/transactions-selectors';
import { closeModal } from 'redux/transactions/transactions-slice';
import DatetimePicker from '../DatetimePicker/DatetimePicker';
import SelectCategory from '../SelectCategory/SelectCategory';

import SwitchModal from '../SwitchModal/SwitchModal';

import {
  InputBalance,
  Overlay,
  BalanceDateWrapper,
  Button,
  ModalTitle,
  TextareaComment,
  ModalWrapper,
} from './ModalWrapper.styled.js';

const ModalWindow = () => {
  const [checked, setChecked] = useState(true);
  const [selected, setSelected] = useState();
  const [balance, setBalance] = useState(null);
  const [comment, setComment] = useState('');
  const [date, setDate] = useState(new Date());
  const categories = useSelector(selectCategory);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isModalOpen = useSelector(selectOpenModal);

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

  const handelKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        console.log(event.code);
        dispatch(closeModal());
      }
    },
    [dispatch]
  );
  const handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      dispatch(closeModal());
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handelKeyDown);

    return () => {
      window.removeEventListener('keydown', handelKeyDown);
    };
  }, [handelKeyDown]);

  return (
    isModalOpen && (
      <Overlay onClick={handleBackDropClick}>
        <ModalWrapper>
          <button
            type="button"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Close
          </button>
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
            <Button type="button">Add</Button>
            <Button type="button">Clear</Button>
          </form>
        </ModalWrapper>
      </Overlay>
    )
  );
};
export default ModalWindow;
