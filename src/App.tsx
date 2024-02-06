import './App.css';

import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Link to="/timer">Timer</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/user-activity">User Activity</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
