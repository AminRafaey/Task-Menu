import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '../HOC';
import stateCloner from '../utility/stateCloner';
import { Box, Typography, styled, Card } from '@material-ui/core';

const TaskWrapper = styled(Box)({
  paddingTop: 16,
});

const NameWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: 16,
});

function Task(props) {
  const { type, task, tasks, setTasks, index } = props;

  const handleChange = (e) => {
    const cloneState = stateCloner(tasks);
    cloneState[index]['selected'] = e.target.checked;
    setTasks(cloneState);
  };

  return (
    <TaskWrapper>
      <Card>
        <NameWrapper>
          {type === 'bulkDelete' && (
            <Checkbox
              color="primary"
              checked={task.selected ? task.selected : false}
              onChange={handleChange}
            />
          )}
          <Typography variant="h3">{task.name}</Typography>
        </NameWrapper>
      </Card>
    </TaskWrapper>
  );
}

Task.propTypes = {
  type: PropTypes.string.isRequired,
  task: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Task;
