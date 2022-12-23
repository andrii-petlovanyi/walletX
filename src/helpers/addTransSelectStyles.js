const addTransSelectStyles = {
  container: styles => ({
    ...styles,
  }),
  control: styles => ({
    ...styles,
    width: '100%',
    borderColor: '#ffffff',
    borderBottom: '1px solid #E0E0E0',
    cursor: 'pointer',
  }),

  valueContainer: styles => ({
    ...styles,
    padding: '8px 20px',
    margin: 0,
  }),

  input: styles => ({
    ...styles,
    padding: 0,
    margin: 0,
  }),
  menu: styles => ({
    ...styles,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(25px)',
    borderRadius: 20,
    outline: 0,
  }),
  placeholder: styles => ({
    ...styles,
    padding: 0,
    margin: 0,
    color: '#bdbdbd',
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    color: isFocused ? '#FF6596' : isSelected ? '#FF6596' : undefined,
    backgroundColor: isFocused ? '#ffffff' : isSelected ? '#ffffff' : undefined,
    cursor: 'pointer',
    borderRadius: isFocused ? '0' : isSelected ? '0' : undefined,
    fontFamily: 'Circe',
    fontWeight: isFocused ? '700' : isSelected ? '700' : '400',
    fontSize: 18,
    lineHeight: 1.5,
    display: 'flex',
    alignItems: 'center',
  }),
};

export default addTransSelectStyles;
