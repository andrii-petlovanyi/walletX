import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import getCategory from 'redux/category/category-operations';
import { selectCategory } from 'redux/category/category-selectors';
import operations from 'redux/transactions/transactions-operations';
import DatetimePicker from '../DatetimePicker/DatetimePicker';
// import SelectCategory from '../SelectCategory/SelectCategory';
import { ButtonAddTrans } from '../styled';
import { HiPlus } from 'react-icons/hi2';
import Select from 'react-select';

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
  const [balance, setBalance] = useState('');
  const [comment, setComment] = useState('');
  const [date, setDate] = useState(new Date());
  const categories = useSelector(selectCategory);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const [isOpen, setIsOpen] = useState(false);

  const options = categories
    .filter(category => category.type === 'EXPENSE')
    .map(category => {
      return { value: category.name, label: category.name };
    });

  const findCategory = value => {
    return categories.find(category => category.name === value);
  };

  useEffect(() => {
    if (!isLoggedIn) return;

    dispatch(getCategory());
  }, [dispatch, isLoggedIn]);

  const handleChange = e => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(e.target.name, e.target.value);
    if (name === 'comment') {
      setComment(() => value);
    }
    // if (name === 'balance') {
    //   setBalance(() => value);
    // }
  };

  const handleChangeBalance = event => {
    const result = event.target.value.replace(/[a-z]/g, '');

    setBalance(result);
  };

  const onSubmit = e => {
    e.preventDefault();
    const categoryData = findCategory(checked ? selected.value : 'Income');

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
    dispatch(operations.createTransaction(transaction));
    reset();
  };

  const reset = () => {
    setSelected();
    setBalance('');
    setComment('');
    setDate('');
    setChecked(true);
  };

  const handelKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        setIsOpen(!isOpen);
      }
    },
    [isOpen]
  );
  const handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      setIsOpen(!isOpen);
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handelKeyDown);

    return () => {
      window.removeEventListener('keydown', handelKeyDown);
    };
  }, [handelKeyDown]);

  return (
    <>
      {!isOpen && (
        <ButtonAddTrans
          aria-label="add transaction"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiPlus />
        </ButtonAddTrans>
      )}
      {isOpen && (
        <Overlay onClick={handleBackDropClick}>
          <ModalWrapper>
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
              Close
            </button>
            <form onSubmit={onSubmit}>
              <ModalTitle>Add transaction</ModalTitle>
              <SwitchModal checked={checked} setChecked={setChecked} />
              {checked && (
                <Select
                  options={options}
                  value={selected ? selected : ''}
                  onChange={setSelected}
                />
              )}
              <BalanceDateWrapper htmlFor="balance">
                <InputBalance
                  type="text"
                  name="balance"
                  id="balance"
                  placeholder="0.00"
                  // type="text"
                  // pattern="[0-9]*"
                  // step="0.01"

                  value={balance}
                  required
                  onChange={e => handleChangeBalance(e)}
                />
                <DatetimePicker date={date} setDate={setDate} />
              </BalanceDateWrapper>
              <TextareaComment
                placeholder="Comment"
                name="comment"
                value={comment}
                onChange={e => handleChange(e)}
              ></TextareaComment>
              <Button type="submit">Add</Button>
              <Button type="button">Clear</Button>
            </form>
          </ModalWrapper>
        </Overlay>
      )}
    </>
  );
};
export default ModalWindow;
