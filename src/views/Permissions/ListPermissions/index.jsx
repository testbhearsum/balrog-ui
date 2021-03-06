import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import PlusIcon from 'mdi-react/PlusIcon';
import Dashboard from '../../../components/Dashboard';

const useStyles = makeStyles(theme => ({
  fab: {
    ...theme.mixins.fab,
  },
}));

function ListPermissions() {
  const classes = useStyles();

  function handlePermissionAdd() {}

  return (
    <Dashboard>
      <Typography variant="subtitle1">Permissions</Typography>
      <Tooltip title="Add Permission">
        <Fab
          color="primary"
          className={classes.fab}
          classes={{ root: classes.fab }}
          onClick={handlePermissionAdd}>
          <PlusIcon />
        </Fab>
      </Tooltip>
    </Dashboard>
  );
}

export default ListPermissions;
