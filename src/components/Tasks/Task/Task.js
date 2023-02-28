import { RiCheckboxCircleFill, RiCloseCircleFill } from 'react-icons/ri';
import './Task.scss';

function Task(props) {
  const handleStatusClick = () => {
    const id = props.task.id;
    props.onStatusChange(id);
  }

  const handleRemoveClick = () => {
    const id = props.task.id;
    props.onTaskRemove(id);
  }

  return (
    <div className="task-container">
      <h3>{props.task.description}</h3>
      <div className="task-header">Id:</div>
      <div>{props.task.id}</div>
      <div className="task-header">Status:</div>
      <div className={`task-status ${props.task.done ? 'completed' : 'open'}`}>
        {props.task.done ? 'Completed' : 'Open'}
      </div>
      <div className="task-buttons">
        <span onClick={handleStatusClick}>
          {props.task.done
            ? <RiCheckboxCircleFill className="task-icon task-icon--completed" />
            : <RiCheckboxCircleFill className="task-icon" />
          }
          <span className="task-button-text">Change Status</span>
        </span>
        <span onClick={handleRemoveClick}>
          <RiCloseCircleFill className="task-icon task-icon--remove" />
          <span className="task-button-text">Remove Task</span>
        </span>
      </div>
    </div>
  );
}

export default Task;
