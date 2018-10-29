import React from 'react';
import CenteredPaper from '../../molecules/CenteredPaper';
import Button from '@material-ui/core/Button/Button';
import Spacer from '../../atoms/Spacer';
import TextField from '@material-ui/core/TextField/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';

const MongoConnect = ({ classes, connStr, dbName, onChangeConnStr, onChangeDbName, onBack, onCancel, onFinish }) => (
  <CenteredPaper title={'How to connect?'} subtitle={'We need to know how to connect to your database.'}>
    <div className={classes.fields}>
      <TextField required fullWidth InputLabelProps={{ shrink: true }}
                 label={'Connection string'} autoFocus value={connStr}
                 helperText={'e.g. - mongodb+srv://username:password@cluster.hostname.net/test'}
                 onChange={onChangeConnStr}/>
      <Spacer vertical={'medium'}/>
      <TextField required fullWidth InputLabelProps={{ shrink: true }} label={'Database name'} value={dbName} onChange={onChangeDbName}/>
    </div>
    <Spacer vertical={'large'}/>
    <Button size={'large'} variant={'outlined'} color={'primary'} onClick={onFinish}>Finish and start the service</Button>
    <Spacer/>
    <Button size={'large'} variant={'outlined'} onClick={onBack}>Go back and pick a database</Button>
    <Spacer/>
    <Button size={'large'} variant={'outlined'} onClick={onCancel}>Cancel and open a project instead</Button>
  </CenteredPaper>
);

MongoConnect.propTypes = {
  connStr: PropTypes.string,
  dbName: PropTypes.string,
  onChangeConnStr: PropTypes.func.isRequired,
  onChangeDbName: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
};

const styles = theme => ({
  fields: {
    width: '100%',
    maxWidth: '800px'
  }
});

export default compose(
  withStyles(styles)
)(MongoConnect);
