import { useState } from 'react';
import SelectCategory from './SelectCategory';
import {
  Switch,
  SwitchInput,
  SwitchLabel,
  SwitchWrapper,
  TextExpense,
  TextIncome,
} from './styled';

const SwitchModal = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = e => setChecked(e.target.checked);

  return (
    <SwitchWrapper>
      <TextIncome>Income</TextIncome>
      <SwitchLabel>
        <SwitchInput
          checked={checked}
          type="checkbox"
          onChange={handleChange}
        />
        <Switch />
      </SwitchLabel>

      <TextExpense>Expense</TextExpense>
      {checked && <SelectCategory />}
    </SwitchWrapper>
  );
};
export default SwitchModal;
