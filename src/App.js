import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { theme } from './theme';
import { TaskList, CreateTask } from './components';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.getItem('tasks') &&
      setTasks(JSON.parse(localStorage.getItem('tasks')));
    return () => localStorage.setItem('tasks', JSON.stringify(tasks));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const commonProps = {
    tasks,
    setTasks,
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/create-task">
            <CreateTask {...commonProps} />
          </Route>

          <Route path="/bulk-delete">
            <TaskList type="bulkDelete" {...commonProps} />
          </Route>

          <Route path="/list-tasks">
            <TaskList type="taskLists" {...commonProps} />
          </Route>

          <Route path="/">
            <Redirect to={{ pathname: '/list-tasks' }} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
