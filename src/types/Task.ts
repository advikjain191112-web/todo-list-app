export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  category: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
}

export type FilterType = 'all' | 'active' | 'completed';
export type SortType = 'date' | 'priority' | 'alphabetical';
