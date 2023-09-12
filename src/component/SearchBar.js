import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <input
      type="text"
      placeholder="Search your photo ...."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
