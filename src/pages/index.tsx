'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import { Task, FilterType, SortType } from '@/types/Task';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';
import Filters from '@/components/Filters';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const { tasks, addTask, updateTask, deleteTask, toggleTask, clearCompleted, isLoaded } = useLocalStorage();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('date');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg">Loading your tasks...</p>
        </div>
      </div>
    );
  }

  const handleAddOrUpdateTask = (task: Task) => {
    if (editingTask) {
      updateTask(task.id, task);
      setEditingTask(null);
    } else {
      addTask(task);
    }
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            📝 Todo List
          </h1>
          <p className="text-gray-400 text-lg">
            You have {tasks.length} total tasks • {completedCount} completed
          </p>
        </div>

        {/* Task Form */}
        <TaskForm onSubmit={handleAddOrUpdateTask} editingTask={editingTask} onCancel={handleCancelEdit} />

        {/* Search Bar */}
        <SearchBar onSearch={setSearchQuery} />

        {/* Filters */}
        <Filters tasks={tasks} onFilterChange={setFilter} onSortChange={setSort} currentFilter={filter} />

        {/* Clear Completed Button */}
        {completedCount > 0 && (
          <button
            onClick={clearCompleted}
            className="mb-6 px-4 py-2 bg-red-600/20 hover:bg-red-600/40 text-red-400 rounded-lg font-semibold transition-colors"
          >
            Clear {completedCount} Completed Task{completedCount !== 1 ? 's' : ''}
          </button>
        )}

        {/* Task List */}
        <TaskList
          tasks={tasks}
          filter={filter}
          sort={sort}
          searchQuery={searchQuery}
          onToggle={toggleTask}
          onEdit={handleEditTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
}
