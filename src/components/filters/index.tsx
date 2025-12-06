import FilterItem from './filterItem';
import {
  categories,
  priorities,
  statuses,
  sortOption as sortOptions,
} from '../../constants/filters';
import Block from '../layout/block';
import React from 'react';

type FiltersProps = {
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  priorityFilter: string;
  setPriorityFilter: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  sortOption: string;
  setSortOption: (value: string) => void;
};

const Filters: React.FC<FiltersProps> = ({
  categoryFilter,
  setCategoryFilter,
  priorityFilter,
  setPriorityFilter,
  statusFilter,
  setStatusFilter,
  sortOption,
  setSortOption,
}) => {
  return (
    <Block>
      <div className="grid grid-cols-4 gap-4">
        <FilterItem
          title="دسته بندی "
          listItems={categories}
          currentValue={categoryFilter}
          onChange={setCategoryFilter}
        />
        <FilterItem
          title="اولویت ها  "
          listItems={priorities}
          currentValue={priorityFilter}
          onChange={setPriorityFilter}
        />
        <FilterItem
          title=" وضعیت  "
          listItems={statuses}
          currentValue={statusFilter}
          onChange={setStatusFilter}
        />
        <FilterItem
          title="مرتب سازی"
          listItems={sortOptions}
          currentValue={sortOption}
          onChange={setSortOption}
        />
      </div>
    </Block>
  );
};

export default React.memo(Filters);
