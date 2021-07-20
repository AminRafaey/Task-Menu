import React from 'react';
import { withStyles, Checkbox as MuiCheckbox } from '@material-ui/core';

const StyledMuiCheckbox = withStyles({
  root: {
    padding: 4,
  },
})(MuiCheckbox);

const Checkbox = (props) => {
  const { ...other } = props;
  return <StyledMuiCheckbox {...other} />;
};

export default Checkbox;
