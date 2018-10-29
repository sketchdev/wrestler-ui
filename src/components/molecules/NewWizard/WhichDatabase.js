import React from 'react';
import CenteredPaper from '../../molecules/CenteredPaper';
import Button from '@material-ui/core/Button/Button';
import Spacer from '../../atoms/Spacer';
import PropTypes from 'prop-types';

const WhichDatabase = ({ onCancel, onMongo, onMemory, onBack }) => (
  <CenteredPaper title={'Which database?'} subtitle={`Pick the database engine you'd like to use.`}>
    <Button size={'large'} variant={'outlined'} color={'primary'} onClick={onMongo}>Use MongoDB</Button>
    <Spacer/>
    <Button size={'large'} variant={'outlined'} color={'primary'} onClick={onMemory}>Just store everything in memory for now</Button>
    <Spacer/>
    <Button size={'large'} variant={'outlined'} onClick={onBack}>Go back and pick a port</Button>
    <Spacer/>
    <Button size={'large'} variant={'outlined'} onClick={onCancel}>Cancel and open a project instead</Button>
  </CenteredPaper>
);

WhichDatabase.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onMongo: PropTypes.func.isRequired,
  onMemory: PropTypes.func.isRequired,
};


export default WhichDatabase;
