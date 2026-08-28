'use client';

import { Task, FilterType, SortType } from '@/types/Task';
import TaskItem from './TaskItem';
import { sortTasks } from '@/utils/taskUtils';

interface TaskListProps {
  tasks: Task[];
  filter: FilterType;
  sort: SortType;
  searchQuery: string;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({
  tasks,
  filter,
  sort,
  searchQuery,
  onToggle,
  onEdit,
  onDelete,
}: TaskListProps) {
  // Filter tasks
  let filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  // Search tasks
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredTasks = filteredTasks.filter(
      (task) =>
        task.title.toLowerCase().includes(query) ||
        task.description.toLowerCase().includes(query) ||
        task.category.toLowerCase().includes(query)
    );
  }

  // Sort tasks
  filteredTasks = sortTasks(filteredTasks, sort);

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">📭 No tasks found</p>
        <p className="text-gray-500 text-sm mt-2">Try creating a new task or adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
