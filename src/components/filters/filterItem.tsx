import React from 'react';
import { SelectItem } from '../../constants/filters';

export type FilterItemProps = {
  title: string;
  listItems: SelectItem[];
  currentValue: string;
  onChange: (value: string) => void;
};

const FilterItem: React.FC<FilterItemProps> = ({
  title,
  listItems,
  currentValue,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {title}
      </label>
      <select
        className="block w-full text-gray-700 border border-gray-300 rounded-md p-2"
        value={currentValue}
        onChange={handleChange}
      >
        {listItems.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(FilterItem);
