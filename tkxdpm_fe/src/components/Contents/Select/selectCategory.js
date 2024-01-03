import React, { useState } from 'react';
import Select from 'react-select';


const SelectCategory = ({onSelectCategory}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [{label: 'Sách', id: '1'}, {label: 'Đĩa than', id: '2'} , {label: 'Đĩa CD', id: '3'}, {label: 'Đĩa DVD', id: '4'}];

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    onSelectCategory(selectedOption.id)
  };

  return (
    <div>
      <Select
        value={selectedCategory}
        onChange={handleCategoryChange}
        options={categories}
        isMulti={false}
        placeholder = "Chọn thể loại"
      />
    </div>
  );
};

export default SelectCategory;