import React, { useState } from 'react';
import Select from 'react-select';

const cities = [
  { label: 'Hà Nội' },
  { label: 'TP Hồ Chí Minh' },
  { label: 'Da Nang' },
  // Thêm các thành phố khác nếu cần
];

const SelectCity = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  return (
    <div>
      <Select
        value={selectedCity}
        onChange={handleCityChange}
        options={cities}
        isMulti={false} // Chỉ cho phép chọn một thành phố
        placeholder = "Chọn thành phố"
      />
    </div>
  );
};

export default SelectCity;