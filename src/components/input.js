import React, { useState } from 'react';
import Select from 'react-select';

const Input = ({ label, inputType, name, value, onChange, options }) => {
  const [fileName, setFileName] = useState(null);

  const handleSelectChange = selectedOption => {
    onChange({ target: { name, value: selectedOption } });
  };

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
    onChange({ target: { name, value: file } });
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '8px',
      padding: '4px 18px',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0',
    }),
    placeholder: () => ({}),
  };

  const selectedOption = options?.find(option => option.value === value);

  return (
    <div className="input-group">
      <label htmlFor={name} className='text-white text-sm sm:text-base font-thin'>{label}</label>
      {inputType === 'select' ? (
        <Select
          required
          className='w-full text-black'
          value={selectedOption}
          onChange={handleSelectChange}
          options={options}
          name={name}
          styles={customStyles}
          isClearable={false}
          placeholder=""
        />
      ) : inputType === 'foto' ? (
        <div className="relative bg-white rounded-lg">
          <input
            accept=".jpg, .jpeg, .png"
            type="file"
            id={name}
            name={name}
            onChange={handleFileChange}
            required
            className="absolute opacity-0 w-full h-full"
          />
          <div className='py-2 px-5 rounded-lg w-full border border-gray-300 text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-primary-600'>
            {fileName ? fileName : 'Click aquí!!!'}
          </div>
        </div>
      ) : (
        <input
          required
          className='py-2 px-5 rounded-lg w-full'
          type={inputType}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Input;
