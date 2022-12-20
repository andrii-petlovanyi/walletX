import { useSelector } from 'react-redux';
import { selectCategory } from 'redux/category/category-selectors';
import Select from 'react-select';
// import { selectCategory } from 'redux/transactions/transactions-selectors';

const SelectCategory = ({ selected, setSelected }) => {
  // const [selected, setSelected] = useState();
  const categories = useSelector(selectCategory);
  const options = categories
    .filter(category => category.type === 'EXPENSE')
    .map(category => {
      return { value: category.name, label: category.name };
    });

  return (
    // <SelectForm onSubmit={handleSubmit}>
    <Select
      options={options}
      onChange={data => {
        setSelected(data);
      }}
    />
    // </SelectForm>
  );
};
export default SelectCategory;
