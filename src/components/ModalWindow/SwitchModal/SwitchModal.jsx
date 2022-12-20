import { useState } from 'react';
import SelectCategory from '../SelectCategory/SelectCategory';
import {
  Switch,
  SwitchInput,
  SwitchLabel,
  SwitchWrapper,
  TextExpense,
  TextIncome,
} from '../styled';

const SwitchModal = () => {
  const [checked, setChecked] = useState(false);

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
        <Switch switchColor={!checked ? '#24cca7' : '#ff6596'} />
      </SwitchLabel>

      <TextExpense expenseColor={expenseColor}>Expense</TextExpense>
      {checked && <SelectCategory />}
    </SwitchWrapper>
  );
};
export default SwitchModal;
