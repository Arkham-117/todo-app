import { useState } from "react";
import "./Form.scss";
import { RiAddLine } from 'react-icons/ri';

function Form({ onAddTask }) {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmission = (event) => {
    event.preventDefault();

    // Validate the user input.
    if (description === '') {
      setErrorMessage('Enter a description.');
    }
    else {

      // Add the task.
      onAddTask(description, status);

      // Reset the form state.
      setDescription('')
      setStatus(false);
      setErrorMessage('');
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmission}>
        <h2>Add a new task:</h2>

        {/* Conditional render of the error message */}
        {errorMessage !== '' && (
          <div className="form-error-message">{errorMessage}</div>
        )}

        {/* Description Field */}
        <div className="form-field">
          <label className="form-label" htmlFor="description-input">
            Description:
          </label>
          <input
            id="description-input"
            type="text"
            maxLength={150}
            className="form-input"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        {/* Status Field */}
        <div className="form-field">
          <label className="form-label" htmlFor="status-select">
            Status:
          </label>
          <select
            id="status-select"
            className="form-select"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value={false}>Open</option>
            <option value={true}>Completed</option>
          </select>
        </div>

        {/* Submission Button */}
        <button className="form-submit-button"><RiAddLine size={15} />Add</button>
      </form>
    </div>
  );
}

export default Form;
