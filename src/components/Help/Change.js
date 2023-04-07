import { Route, Routes, Link } from "react-router-dom";


function Change() {
    return (
      <>
        <h1>Changing Status</h1>
        <p>To change the status of a task, click on the checkbox next to the task.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ul>
          <li><Link to="/help">Introduction</Link></li>
            <li><Link to="/adding">Adding tasks</Link></li>
            <li><Link to="/remove">Removing tasks</Link></li>
            <li><Link to="/change">Changing task status</Link></li>
          </ul>
      </>
    );
  }

  export default Change;