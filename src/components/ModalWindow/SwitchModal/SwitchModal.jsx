import {
  Switch,
  SwitchInput,
  SwitchLabel,
  SwitchWrapper,
  TextExpense,
  TextIncome,
} from './styled';
import imagePlus from '../../../images/modal/plus.svg';
import imageMinus from '../../../images/modal/minus.svg';

const SwitchModal = ({ checked, setChecked }) => {
  const handleChange = e => setChecked(e.target.checked);
  let incomeColor = !checked ? '#24cca7' : '#e0e0e0';
  let expenseColor = checked ? '#ff6596' : '#e0e0e0';

  return (
    <SwitchWrapper>
      <TextIncome incomeColor={incomeColor}>Income</TextIncome>
      <SwitchLabel htmlFor="checkbox">
        <SwitchInput
          id="checkbox"
          name="checkbox"
          checked={checked}
          type="checkbox"
          onChange={handleChange}
        />
        <Switch
          switchColor={!checked ? '#24cca7' : '#ff6596'}
          backgroundImage={
            !checked ? `url(${imagePlus})` : `url(${imageMinus})`
          }
        ></Switch>
      </SwitchLabel>
      <TextExpense expenseColor={expenseColor}>Expense</TextExpense>
    </SwitchWrapper>
  );
};
export default SwitchModal;
