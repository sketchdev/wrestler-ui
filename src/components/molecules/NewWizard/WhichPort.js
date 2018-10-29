import React from 'react';
import CenteredPaper from '../../molecules/CenteredPaper';
import Button from '@material-ui/core/Button/Button';
import TextField from '@material-ui/core/TextField/TextField';
import PropTypes from 'prop-types';
import Spacer from '../../atoms/Spacer';

const WhichPort = ({ classes, port, onPortChange, onContinue, onCancel }) => (
  <CenteredPaper title={'What port?'} subtitle={'Values from 3,000 to 9,000 are popular choices.'}>
    <TextField required label={'Port'} InputLabelProps={{ shrink: true }} type={'number'} autoFocus value={port} onChange={onPortChange}/>
    <Spacer vertical={'large'}/>
    <Button size={'large'} variant={'outlined'} color={'primary'} onClick={onContinue}>Continue creating a service</Button>
    <Spacer/>
    <Button size={'large'} variant={'outlined'} onClick={onCancel}>Cancel and go back</Button>
  </CenteredPaper>
);

WhichPort.propTypes = {
  port: PropTypes.string.isRequired,
  onPortChange: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default WhichPort;
