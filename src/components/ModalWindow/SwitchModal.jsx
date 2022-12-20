import { useState } from 'react';
import {
  Switch,
  SwitchInput,
  SwitchLabel,
  SwitchWrapper,
  TextExpense,
  TextIncome,
} from './styled';

const SwitchModal = () => {
  const [checked, setChecked] = useState(false); // store value

  const handleChange = e => setChecked(e.target.checked);

  return (
    <SwitchWrapper>
      <TextIncome>Income</TextIncome>
      <SwitchLabel>
        {/* {checked ? 'Income' : 'Expense'} */}
        <SwitchInput
          checked={checked}
          type="checkbox"
          onChange={handleChange}
        />
        <Switch />
      </SwitchLabel>
      <TextExpense>Expense</TextExpense>
    </SwitchWrapper>
  );
};
export default SwitchModal;
