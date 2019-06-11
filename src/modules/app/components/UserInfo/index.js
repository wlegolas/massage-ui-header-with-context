import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar } from "@material-ui/core"
import { useAppContext } from '../../context/AppContext'

const useStyles = makeStyles({
  root: {
    backgroundColor: 'purple',
    color: '#fff'
  },
});

export default function UserInfo() {
  const classes = useStyles();
  const { userInfo } = useAppContext();

  return (
    <Avatar className={classes.root}>{userInfo.initials}</Avatar>
  );
}
