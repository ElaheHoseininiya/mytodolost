'use client';
import React from 'react';
import Block from '../layout/block';

type SearchProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

const Search: React.FC<SearchProps> = ({ searchText, setSearchText }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(event.target.value);
  };

  return (
    <Block>
      <input
        type="text"
        placeholder="جستجو..."
        className="border border-gray-300 rounded-md p-2 w-full"
        value={searchText}
        onChange={handleChange}
      />
    </Block>
  );
};

export default React.memo(Search);
