import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: 'purple',
    color: '#fff'
  },
});

export default function UserInfo(props) {
  const classes = useStyles();

  return (
    <Avatar className={classes.root}>LG</Avatar>
  );
}
