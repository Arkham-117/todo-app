import Task from './Task/Task';
import './Tasks.scss';
import { RiDeleteBinLine } from 'react-icons/ri';

function Tasks({ tasks, onStatusChange, onTaskRemove, onClearTasks }) {
  return (
    <div className="tasks-container">
      <h2>These are the tasks:</h2>

      {/* Renders each task. */}
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onStatusChange={onStatusChange}
          onTaskRemove={onTaskRemove}
        />
      ))}

      {/* Remove Button */}
      <hr />
      <button className="clear-tasks-btn" onClick={onClearTasks}>
        <RiDeleteBinLine className="clear-tasks-btn-icon" />
        Clear Tasks
      </button>
    </div>
  );
}

export default Tasks;
