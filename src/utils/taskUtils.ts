import { Task } from '@/types/Task';

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function formatDate(date: string): string {
  try {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return 'Invalid date';
  }
}

export function isOverdue(dueDate: string): boolean {
  try {
    return new Date(dueDate) < new Date() && new Date(dueDate).toDateString() !== new Date().toDateString();
  } catch {
    return false;
  }
}

export function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'high':
      return 'text-red-500';
    case 'medium':
      return 'text-yellow-500';
    case 'low':
      return 'text-green-500';
    default:
      return 'text-gray-500';
  }
}

export function getPriorityBgColor(priority: string): string {
  switch (priority) {
    case 'high':
      return 'bg-red-500/20';
    case 'medium':
      return 'bg-yellow-500/20';
    case 'low':
      return 'bg-green-500/20';
    default:
      return 'bg-gray-500/20';
  }
}

export function sortTasks(tasks: Task[], sortBy: 'date' | 'priority' | 'alphabetical'): Task[] {
  const copy = [...tasks];
  switch (sortBy) {
    case 'priority':
      return copy.sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
    case 'alphabetical':
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    case 'date':
    default:
      return copy.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
}
