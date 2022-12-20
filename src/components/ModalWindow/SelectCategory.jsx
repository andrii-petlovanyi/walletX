const SelectCategory = () => {
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <select
        // name="category" value={category} onChange={handleChange}
        >
          <option>Select a category</option>
          <option>Main expenses</option>
          <option>Products</option>
          <option>Car</option>
          <option>Self care</option>
          <option>Child care</option>
          <option>Education</option>
          <option>Leisure</option>
          <option>Other expenses</option>
          <option>Entertainment</option>
        </select>
      </label>
    </form>
  );
};
export default SelectCategory;
