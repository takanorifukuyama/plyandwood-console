import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


// eslint-disable-next-line no-undef
var data = require('./products.json')

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>商品名</TableCell>
            <TableCell align="right">商品コード</TableCell>
            <TableCell align="right">厚さ(mm)</TableCell>
            <TableCell align="right">幅(mm)</TableCell>
            <TableCell align="right">長さ(mm)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.name}>
              {/* eslint-disable-next-line */}
              <TableCell component="th" scope="row">
                {row.product}
              </TableCell>
              <TableCell align="right">{row.code}</TableCell>
              <TableCell align="right">{row.shick}</TableCell>
              <TableCell align="right">{row.weight}</TableCell>
              <TableCell align="right">{row.height}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
