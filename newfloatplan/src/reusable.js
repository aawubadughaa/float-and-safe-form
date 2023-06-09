import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const SelectComponent = ({ options, onChange }) => {
    const [showInput, setShowInput] = useState(false);
    const [otherValue, setOtherValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
  
    const handleSelectChange = (e) => {
      const newSelectedValue = e.target.value;
      setSelectedValue(newSelectedValue);
      setShowInput(newSelectedValue === 'Other');
  
      // If "Other" is selected, pass the value of the otherValue state,
      // otherwise pass the selected value
      onChange(newSelectedValue === 'Other' ? otherValue : newSelectedValue);
    };
  
    const handleInputChange = (e) => {
      const newValue = e.target.value;
      setOtherValue(newValue);
      onChange(newValue); // Pass the new input value back to the parent
    };
  
    return (
      <div>
        <FormControl variant="outlined" 
            style={{
             width: selectedValue ? 'auto' : '100px',
             marginLeft: '20px'
            }}>
          <InputLabel id="select-label" htmlFor="outlined-select">Select</InputLabel>
          <Select
            labelId="select-label"
            id="outlined-select"
            value={selectedValue}
            onChange={handleSelectChange}
            label="Select"
            input={<OutlinedInput label="Select" />}
          >
            <MenuItem disabled value="">Select</MenuItem>
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
            <MenuItem value='Other'>Other</MenuItem>
          </Select>
        </FormControl>
        {showInput && <TextField type="text" value={otherValue} onChange={handleInputChange} />}
      </div>
    );
};
  

export let placeforholding = {
  a: 'Please input date (Month/Day/Year)',
  b: 'Enter your answer',
};

export function Input_box({placeholder, onChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  const inputStyle = {
    width: '650px',
    marginLeft: '20px',
  };

  return (
    <div>
      <OutlinedInput
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );
}

export const Checklist = ({ options, onChange }) => {
    const [checkedValues, setCheckedValues] = React.useState([]);

    const handleChange = (event) => {
        const value = event.target.name;
        const isChecked = event.target.checked;

        setCheckedValues(prevValues => {
            if (isChecked) {
                // Add to checkedValues
                return [...prevValues, value];
            } else {
                // Remove from checkedValues
                return prevValues.filter(prevValue => prevValue !== value);
            }
        });
    };

    React.useEffect(() => {
        let output = '';
        // Check if all options are selected
        if (checkedValues.length === options.length) {
            output = 'all';
        } else {
            output = checkedValues.join(', ');
        }
        // Update the parent component
        onChange(output);
    }, [checkedValues, onChange, options.length]);

    return (
        <div>
            {options.map((option, index) => (
                <FormControlLabel
                    key={index}
                    control={
                        <Checkbox
                            checked={checkedValues.includes(option.value)}
                            onChange={handleChange}
                            name={option.value}
                        />
                    }
                    label={option.label}
                    style={{display: 'block', marginLeft: '20px'}}  // Force each checkbox to take up a full line
                />
            ))}
        </div>
    );
};
