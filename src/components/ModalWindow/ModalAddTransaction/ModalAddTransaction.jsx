import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import getCategory from 'redux/category/category-operations';
import { selectCategory } from 'redux/category/category-selectors';
import operations from 'redux/transactions/transactions-operations';
import DatetimePicker from '../DatetimePicker/DatetimePicker';
import { ButtonAddTrans } from '../styled';
import { HiPlus } from 'react-icons/hi2';
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoCloseSharp } from 'react-icons/io5';
import SwitchModal from '../SwitchModal/SwitchModal';

import {
  InputBalance,
  Overlay,
  BalanceDateWrapper,
  Button,
  ModalTitle,
  TextareaComment,
  ModalWrapper,
  ButtonClose,
} from './ModalAddTransaction.styled.js';
import { selectError } from 'redux/transactions/transactions-selectors';
import { cleanError } from 'redux/transactions/transactions-slice';

const ModalAddTransaction = () => {
  const [checked, setChecked] = useState(true);
  const [selected, setSelected] = useState();
  const [balance, setBalance] = useState('');
  const [comment, setComment] = useState('');
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({
    select: false,
    balance: false,
    datePick: false,
  });
  const categories = useSelector(selectCategory);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

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
    const { name, value } = e.target;
    if (name === 'comment') {
      setComment(() => value);
    }
    // if (name === 'balance') {
    //   setBalance(() => value);
    // }
  };

  const handleChangeBalance = event => {
    const result = event.target.value.replace(/[a-zA-Z]/g, '');

    setBalance(result);
  };

  function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }

  const validateField = async () => {
    const errorObj = {
      select: false,
      balance: false,
      datePick: false,
    };
    if (checked && !selected) {
      await setError(prevState => {
        return { ...prevState, select: 'select category' };
      });
      errorObj.select = true;
    }

    if (isValidDate(date) === false) {
      await setError(prevState => {
        return { ...prevState, datePick: `date format DD.MM.YYYY` };
      });
      errorObj.datePick = true;
    }
    return errorObj;
  };

  const onSubmit = async e => {
    e.preventDefault();
    const errorObj = await validateField();
    if (errorObj.select || errorObj.datePick || errorObj.balance) {
      return;
    }
    const categoryData = findCategory(checked ? selected.value : 'Income');
    const normalizeBalance = Number(balance).toFixed(2);
    const transaction = {
      amount:
        categoryData.type === 'EXPENSE'
          ? normalizeBalance * -1
          : normalizeBalance,
      transactionDate: date,
      type: categoryData.type,
      categoryId: categoryData.id,
      comment: comment,
    };
    dispatch(operations.createTransaction(transaction));
    reset();
    setIsOpen(false);
  };

  const reset = () => {
    setSelected();
    setBalance('');
    setComment('');
    setDate(new Date());
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
      {isError && toast('Error!')}
      {!isOpen && (
        <ButtonAddTrans
          aria-label="add transaction"
          onClick={() => {
            dispatch(cleanError());
            setIsOpen(!isOpen);
          }}
        >
          <HiPlus />
        </ButtonAddTrans>
      )}
      {isOpen && (
        <Overlay onClick={handleBackDropClick}>
          <ModalWrapper>
            <ButtonClose type="button" onClick={() => setIsOpen(!isOpen)}>
              <IoCloseSharp />
            </ButtonClose>
            <form onSubmit={onSubmit}>
              <ModalTitle>Add transaction</ModalTitle>
              <SwitchModal checked={checked} setChecked={setChecked} />
              {checked && (
                <>
                  <Select
                    options={options}
                    value={selected ? selected : ''}
                    onChange={data => {
                      setSelected(data);
                      setError(prevState => {
                        return { ...prevState, select: null };
                      });
                    }}
                    required
                  />
                  <p>{error.select}</p>
                </>
              )}
              <BalanceDateWrapper htmlFor="balance">
                <InputBalance
                  type="text"
                  name="balance"
                  id="balance"
                  placeholder="0.00"
                  value={balance}
                  required
                  onChange={e => handleChangeBalance(e)}
                />
                <DatetimePicker
                  date={date}
                  setDate={setDate}
                  setError={setError}
                />
                <p>{error.datePick}</p>
              </BalanceDateWrapper>
              <TextareaComment
                placeholder="Comment"
                name="comment"
                value={comment}
                onChange={e => handleChange(e)}
              ></TextareaComment>
              <Button type="submit">Add</Button>
              <Button
                type="button"
                onClick={() => {
                  reset();
                }}
              >
                Clear
              </Button>
            </form>
          </ModalWrapper>
        </Overlay>
      )}
    </>
  );
};
export default ModalAddTransaction;
