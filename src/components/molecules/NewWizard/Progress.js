import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import CenteredPaper from '../CenteredPaper';
import Typography from '@material-ui/core/Typography/Typography';
import PropTypes from 'prop-types';
import Spacer from '../../atoms/Spacer';

const Progress = ({ message }) => (
  <CenteredPaper horizontal={'center'}>
    <CircularProgress size={50} color={'primary'}/>
    {message && (
      <div>
        <Spacer/>
        <Typography>{message}</Typography>
      </div>
    )}
  </CenteredPaper>
);

Progress.propTypes = {
  message: PropTypes.string,
};


export default Progress;
