import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { HiPlus } from 'react-icons/hi2';
import { IoCloseSharp } from 'react-icons/io5';
import 'react-toastify/dist/ReactToastify.css';

import operations from 'redux/transactions/transactions-operations';
import getCategory from 'redux/category/category-operations';
import { selectCategory } from 'redux/category/category-selectors';
import authSelectors from 'redux/auth/auth-selectors';
// import { selectError } from 'redux/transactions/transactions-selectors';
import { cleanError } from 'redux/transactions/transactions-slice';

import SwitchModal from '../SwitchModal/SwitchModal';
import DatetimePicker from '../DatetimePicker/DatetimePicker';
import { ButtonAddTrans } from '../styled';
import {
  InputBalance,
  Overlay,
  BalanceDateWrapper,
  Button,
  ModalTitle,
  TextareaComment,
  ModalWrapper,
  ButtonClose,
  ButtonWrapper,
  ErrorWrapper,
  ErrorText,
  Frame,
} from './styled.js';
import addTransSelectStyles from 'helpers/addTransSelectStyles';
import errorToast from 'components/Toasts/error';

const ModalAddTransaction = ({ className = '' }) => {
  const [checked, setChecked] = useState(false); //true default
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
  // const isError = useSelector(selectError);
  const userBalance = useSelector(authSelectors.getUserBalance);
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
    if (value.length > 150)
      return errorToast('Comment must be max length 150 symbols');
    if (name === 'comment') {
      setComment(() => value);
    }
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
        return { ...prevState, select: 'Select a category, please' };
      });
      errorObj.select = true;
    }

    if (isValidDate(date) === false) {
      await setError(prevState => {
        return { ...prevState, datePick: `Date format DD.MM.YYYY` };
      });
      errorObj.datePick = true;
    }

    if (checked && balance > userBalance) {
      await setError(prevState => {
        return { ...prevState, balance: `Unavailable amount ` };
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
    const res = await dispatch(operations.createTransaction(transaction));

    if (
      res?.payload?.message &&
      res?.payload?.message[0] === 'Expense amount should be negative'
    )
      return errorToast('Expense amount should be more than 0');

    reset();
    setIsOpen(false);
  };

  const reset = () => {
    setSelected();
    setBalance('');
    setComment('');
    setDate(new Date());
    setChecked(false); //true default
    setError({ select: false, balance: false, datePick: false });
  };

  const handelKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        reset();
        setIsOpen(!isOpen);
      }
    },
    [isOpen]
  );

  const handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      reset();
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
      {/* {isError && toast('Error!')} */}
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
            <ButtonClose
              type="button"
              onClick={() => {
                reset();
                setIsOpen(!isOpen);
              }}
            >
              <IoCloseSharp />
            </ButtonClose>
            <form onSubmit={onSubmit}>
              <ModalTitle>Add transaction</ModalTitle>
              <SwitchModal checked={checked} setChecked={setChecked} />
              {checked ? (
                <ErrorWrapper>
                  <Select
                    placeholder="Select a category"
                    styles={addTransSelectStyles}
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
                  <ErrorText>{error.select}</ErrorText>
                </ErrorWrapper>
              ) : (
                <Frame />
              )}
              <BalanceDateWrapper htmlFor="balance">
                <ErrorWrapper>
                  <InputBalance
                    type="number"
                    name="balance"
                    id="balance"
                    placeholder="0.00"
                    value={balance}
                    required
                    onChange={e => handleChangeBalance(e)}
                  />
                  <ErrorText>{error.balance}</ErrorText>
                </ErrorWrapper>
                <ErrorWrapper>
                  <DatetimePicker
                    date={date}
                    setDate={setDate}
                    setError={setError}
                  />
                  <ErrorText>{error.datePick}</ErrorText>
                </ErrorWrapper>
              </BalanceDateWrapper>
              <TextareaComment
                placeholder="Comment"
                name="comment"
                value={comment}
                onChange={e => handleChange(e)}
              ></TextareaComment>
              <ButtonWrapper>
                <Button type="submit" className="button__add">
                  Add
                </Button>
                <Button
                  type="button"
                  className={className}
                  onClick={() => {
                    reset();
                  }}
                >
                  Clear
                </Button>
              </ButtonWrapper>
            </form>
          </ModalWrapper>
        </Overlay>
      )}
    </>
  );
};
export default ModalAddTransaction;
