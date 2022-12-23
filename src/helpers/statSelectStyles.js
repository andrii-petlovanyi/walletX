const statSelectStyles = {
  dropdownIndicator: (prevStyle, state) => ({
    ...prevStyle,
    display: '',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    color: '#000',
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    '&:hover': {
      borderWeight: '3px',
      borderColor: '#000',
    },

    borderWeight: '2px',
    borderColor: state.isFocused ? '#000' : '#000',
    borderRadius: '30px',
    padding: '9px 16px',
    color: '#000',

    background: 'none',
    width: '181px',
    fontFamily: 'Circe',
    fontWeight: '500',
    fontSize: '16px',
  }),
  menu: styles => ({
    ...styles,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(25px)',
    borderRadius: 20,
    outline: 0,
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    color: isFocused ? '#FF6596' : isSelected ? '#FF6596' : undefined,
    backgroundColor: isFocused ? '#ffffff' : isSelected ? '#ffffff' : undefined,
    cursor: 'pointer',
    borderRadius: isFocused ? '0' : isSelected ? '0' : undefined,
    fontFamily: 'Circe',
    fontWeight: isFocused ? '700' : isSelected ? '700' : '400',
    fontSize: 16,
    lineHeight: 1.5,
    display: 'flex',
    alignItems: 'center',
  }),
  placeholder: defaultStyles => ({
    ...defaultStyles,
    color: '#000',
  }),
};

export default statSelectStyles;
