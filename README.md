# Todo List App - Local Storage

A modern, feature-rich to-do list application with local storage functionality. Built with React and TailwindCSS.

## Features

✅ **Add Tasks** - Quickly add new tasks to your list
✏️ **Edit Tasks** - Modify existing tasks
🗑️ **Delete Tasks** - Remove completed or unwanted tasks
✔️ **Mark Complete** - Check off completed tasks
🏷️ **Categories/Tags** - Organize tasks by category
🔍 **Filter & Search** - Find tasks by status or keyword
💾 **Local Storage** - All data saved locally in your browser
🌓 **Dark Mode** - Beautiful dark theme
📱 **Responsive** - Works perfectly on mobile and desktop

## Tech Stack

- **React 18** - UI Library
- **Next.js 14** - Framework
- **TailwindCSS** - Styling
- **LocalStorage API** - Data Persistence
- **TypeScript** - Type Safety

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/advikjain191112-web/todo-list-app.git
cd todo-list-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

1. **Add a Task**: Type in the input field and click "Add Task" or press Enter
2. **Mark Complete**: Click the checkbox next to a task
3. **Edit Task**: Click the edit icon to modify a task
4. **Delete Task**: Click the trash icon to remove a task
5. **Filter Tasks**: Use filter buttons to show All, Active, or Completed tasks
6. **Search**: Use the search bar to find specific tasks

## Data Structure

Tasks are stored in localStorage as JSON:

```typescript
interface Task {
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
```

## Project Structure

```
src/
├── components/
│   ├── TaskForm.tsx      # Add/Edit task form
│   ├── TaskList.tsx      # List of tasks
│   ├── TaskItem.tsx      # Individual task
│   ├── Filters.tsx       # Filter controls
│   └── SearchBar.tsx     # Search functionality
├── hooks/
│   └── useLocalStorage.ts # LocalStorage hook
├── types/
│   └── Task.ts           # Task type definitions
├── styles/
│   └── globals.css       # Global styles
├── pages/
│   ├── index.tsx         # Main page
│   └── _app.tsx          # App wrapper
└── utils/
    └── taskUtils.ts      # Helper functions
```

## Available Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm run start

# Linting
npm run lint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## LocalStorage Details

- **Storage Key**: `todos`
- **Max Size**: ~5-10MB (depending on browser)
- **Persistence**: Data persists across browser sessions
- **Privacy**: Data stored locally, never sent to servers

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Author

Created with ❤️ by advikjain191112-web
