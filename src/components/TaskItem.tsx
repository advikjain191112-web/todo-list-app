'use client';

import { Task } from '@/types/Task';
import { formatDate, isOverdue, getPriorityColor, getPriorityBgColor } from '@/utils/taskUtils';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggle, onEdit, onDelete }: TaskItemProps) {
  const overdue = isOverdue(task.dueDate);

  return (
    <div
      className={`fade-in group flex items-start gap-4 p-4 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:border-purple-500/50 transition-all ${
        task.completed ? 'opacity-60' : ''
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-5 h-5 mt-1 accent-purple-500 cursor-pointer"
      />

      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2 mb-2">
          <h3
            className={`text-lg font-semibold ${
              task.completed ? 'line-through text-gray-500' : 'text-white'
            }`}
          >
            {task.title}
          </h3>
          <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityBgColor(task.priority)} ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
        </div>

        {task.description && <p className="text-gray-400 text-sm mb-2">{task.description}</p>}

        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
          <span className="px-2 py-1 bg-gray-700 rounded">{task.category}</span>
          {task.dueDate && (
            <span className={`px-2 py-1 ${overdue ? 'bg-red-500/20 text-red-400' : 'bg-gray-700'} rounded`}>
              📅 {formatDate(task.dueDate)}
            </span>
          )}
        </div>
      </div>

      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onEdit(task)}
          className="p-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 rounded-lg transition-colors"
          title="Edit task"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="p-2 bg-red-600/20 hover:bg-red-600/40 text-red-400 rounded-lg transition-colors"
          title="Delete task"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
