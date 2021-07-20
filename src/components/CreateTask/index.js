import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { TextField } from '../HOC/index';
import { Box, Typography, styled, Button } from '@material-ui/core';
import { BackgroundColor } from '../constants/theme';
import stateCloner from '../utility/stateCloner';

const CreateTaskWrapper = styled(Box)({
  minWidth: '100%',
  minHeight: '100vh',
  backgroundColor: BackgroundColor,
});

const FormParentWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  padding: '100px 50px 0px',
});

const FormWrapper = styled(Box)({
  width: 300,
});

const LabelWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: 30,
});

const ButtonWrapper = styled(Box)({
  marginTop: 8,
  display: 'flex',
  justifyContent: 'flex-end',
});

const ErrorTyp = styled(Typography)({
  color: '#EB4137',
  paddingBottom: 4,
  fontSize: 12,
});

function CreateTask(props) {
  const { tasks, setTasks } = props;
  const history = useHistory();
  const [taskName, setTaskName] = useState('');
  const [isSubmitCicked, setIsSubmitCicked] = useState(false);

  const handleSubmit = () => {
    setIsSubmitCicked(true);
    if (!taskName) {
      return;
    }
    const cloneState = stateCloner(tasks);
    cloneState.push({ id: tasks.length, name: taskName });
    setTasks(cloneState);
    history.push('/list-tasks');
  };
  return (
    <CreateTaskWrapper>
      <FormParentWrapper>
        <FormWrapper>
          <LabelWrapper>
            <Typography variant="h1">Add Task</Typography>
          </LabelWrapper>

          <TextField
            variant="outlined"
            size="medium"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' && handleSubmit()}
            error={isSubmitCicked ? (taskName ? false : true) : false}
          />
          {isSubmitCicked && !taskName && (
            <ErrorTyp>This field is required</ErrorTyp>
          )}
          <ButtonWrapper>
            <Button
              color="primary"
              size="medium"
              variant="contained"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </ButtonWrapper>
        </FormWrapper>
      </FormParentWrapper>
    </CreateTaskWrapper>
  );
}

CreateTask.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default CreateTask;
