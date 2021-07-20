import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Box, styled, Button } from '@material-ui/core';
import { BackgroundColor } from '../constants/theme';
import { Task } from '../index';

const TaskListWrapper = styled(Box)({
  minWidth: '100%',
  minHeight: '100vh',
  backgroundColor: BackgroundColor,
});

const FormParentWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  padding: '50px 50px 0px',
});

const FormWrapper = styled(Box)({
  minWidth: '100%',
});

const ButtonWrapper = styled(Box)({
  marginTop: 8,
  display: 'flex',
  justifyContent: 'flex-end',
});

function TaskList(props) {
  const { type, tasks, setTasks } = props;
  const history = useHistory();

  const handleDelete = () => {
    setTasks(tasks.filter((t) => !t.selected));
  };

  return (
    <TaskListWrapper>
      <FormParentWrapper>
        <FormWrapper>
          <ButtonWrapper>
            {type === 'taskLists' && (
              <React.Fragment>
                <Button
                  color="primary"
                  size="medium"
                  variant="contained"
                  onClick={() => history.push('/create-task')}
                >
                  Add New
                </Button>
                <Box width={16} />
                <Button
                  color="primary"
                  size="medium"
                  variant="contained"
                  onClick={() => history.push('/bulk-delete')}
                >
                  Delete Tasks
                </Button>
              </React.Fragment>
            )}

            {type === 'bulkDelete' && (
              <React.Fragment>
                <Button
                  color="primary"
                  size="medium"
                  variant="contained"
                  onClick={() => history.push('/list-tasks')}
                >
                  Tasks Lists
                </Button>
                <Box width={16} />
                <Button
                  color="primary"
                  size="medium"
                  variant="contained"
                  onClick={handleDelete}
                >
                  {`Delete(${tasks.filter((t) => t.selected).length})`}
                </Button>
              </React.Fragment>
            )}
          </ButtonWrapper>
          {tasks.map((t, i) => (
            <Task
              type={type}
              task={t}
              key={t.id}
              index={i}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        </FormWrapper>
      </FormParentWrapper>
    </TaskListWrapper>
  );
}

TaskList.propTypes = {
  type: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskList;
