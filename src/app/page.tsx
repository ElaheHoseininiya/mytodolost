'use client';
import React, { useMemo, useState, Suspense } from 'react';
import Search from '../components/search';
import Filters from '../components/filters';
import Overview from '../components/overview';
import TasksList from '../components/tasks';
import { taskList } from '../mocks/tasks';
import { TaskItemType } from '../types/tasks';

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortOption, setSortOption] = useState<string>('latest');

  const filteredAndSortedTasks = useMemo(() => {
    try {
      let filtered = taskList.filter((task: TaskItemType) => {
        if (categoryFilter !== 'all' && task.category !== categoryFilter) {
          return false;
        }

        if (priorityFilter !== 'all' && task.priority !== priorityFilter) {
          return false;
        }

        if (statusFilter !== 'all' && task.status !== statusFilter) {
          return false;
        }

        if (searchText.trim() !== '') {
          const text = searchText.toLowerCase();
          const inTitle = task.title.toLowerCase().includes(text);
          const inDescription = task.description.toLowerCase().includes(text);

          if (!inTitle && !inDescription) {
            return false;
          }
        }

        return true;
      });

      const sorted = [...filtered].sort((a, b) => {
        if (sortOption === 'latest') {
          return b.createdAt.getTime() - a.createdAt.getTime();
        }
        return a.createdAt.getTime() - b.createdAt.getTime();
      });

      return sorted;
    } catch (error) {
      console.error('Error filtering tasks:', error);
      return [];
    }
  }, [categoryFilter, priorityFilter, statusFilter, searchText, sortOption]);

  return (
    <div className="grid items-center justify-items-center">
      <div className="container h-full">
        <div className="grid gap-4">
          <Suspense fallback={<div className="p-4">در حال بارگذاری...</div>}>
            <Filters
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              priorityFilter={priorityFilter}
              setPriorityFilter={setPriorityFilter}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
          </Suspense>

          <Suspense fallback={<div className="p-4">در حال بارگذاری...</div>}>
            <Search searchText={searchText} setSearchText={setSearchText} />
          </Suspense>

          <Suspense fallback={<div className="p-4">در حال بارگذاری...</div>}>
            <Overview />
          </Suspense>

          <Suspense fallback={<div className="p-4">در حال بارگذاری...</div>}>
            <TasksList taskList={filteredAndSortedTasks} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
