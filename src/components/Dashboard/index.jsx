import React, { Fragment } from 'react';
import { node } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import menuItems from './menuItems';
import Link from '../../utils/Link';

const useStyles = makeStyles(theme => ({
  title: {
    textDecoration: 'none',
  },
  main: {
    maxWidth: 980,
    margin: `${theme.spacing(10)}px auto`,
  },
  nav: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    '& button, & a:not(:last-child)': {
      marginRight: theme.spacing(1),
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  buttonWithIcon: {
    paddingLeft: theme.spacing(2),
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const { children } = props;

  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <Typography
            className={classes.title}
            color="inherit"
            variant="h6"
            noWrap
            component={Link}
            to="/">
            Balrog Admin
          </Typography>
          <nav className={classes.nav}>
            {menuItems.map(menuItem => (
              <Link
                key={menuItem.value}
                className={classes.link}
                nav
                to={menuItem.path}>
                <Button color="inherit">{menuItem.value}</Button>
              </Link>
            ))}
          </nav>
        </Toolbar>
      </AppBar>
      <div>Dashboard</div>
      <main className={classes.main}>{children}</main>
    </Fragment>
  );
}

Dashboard.prototype = {
  children: node.isRequired,
};
