import React, { useState } from 'react';
import Datepicker from 'tailwind-datepicker-react';

const options = {
  title: 'Pickup Date',
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  clearBtnText: 'Clear',
  maxDate: new Date('2030-01-01'),
  minDate: new Date(),
  theme: {
    background: 'bg-white',
    todayBtn: '',
    clearBtn: '',
    icons: '',
    text: '',
    // disabledText: 'bg-red-500',
    input: '',
    inputIcon: '',
    selected: '',
  },
  icons: {
    prev: () => <span>Previous</span>,
    next: () => <span>Next</span>,
  },
  datepickerClassNames: 'top-12',
  defaultDate: new Date(),
  language: 'en',
  disabledDates: [],
  weekDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  inputNameProp: 'date',
  inputIdProp: 'date',
  inputPlaceholderProp: 'Select Date',
  inputDateFormatProp: {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  },
};

const DatepickerComponent = () => {
  const [show, setShow] = useState(false);

  const handleChange = (selectedDate) => {
    console.log(selectedDate);
  };

  const handleClose = (state) => {
    setShow(state);
  };

  // Custom styles for Datepicker component
  const datePickerStyles = {
    width: '300px', // Adjust width as needed
    height: '400px',
    padding: '1rem', // Adjust height as needed
  };

  return (
    <div style={{ padding: '0.4rem' }}>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
        style={datePickerStyles}
      />
    </div>
  );
};

export default DatepickerComponent;
