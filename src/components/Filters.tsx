'use client';

import { Task, FilterType, SortType } from '@/types/Task';
import { useState } from 'react';

interface FiltersProps {
  tasks: Task[];
  onFilterChange: (filter: FilterType) => void;
  onSortChange: (sort: SortType) => void;
  currentFilter: FilterType;
}

export default function Filters({ tasks, onFilterChange, onSortChange, currentFilter }: FiltersProps) {
  const completedCount = tasks.filter((t) => t.completed).length;
  const activeCount = tasks.filter((t) => !t.completed).length;

  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            currentFilter === 'all'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          All ({tasks.length})
        </button>
        <button
          onClick={() => onFilterChange('active')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            currentFilter === 'active'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Active ({activeCount})
        </button>
        <button
          onClick={() => onFilterChange('completed')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            currentFilter === 'completed'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Completed ({completedCount})
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Sort By:</label>
        <select
          onChange={(e) => onSortChange(e.target.value as SortType)}
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="date">Newest First</option>
          <option value="priority">Priority</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>
    </div>
  );
}
