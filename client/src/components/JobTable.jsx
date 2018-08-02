import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(company, jobtitle, status, dateApplied) {
  id += 1;
  return { company, jobtitle, status, dateApplied };
}

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date Applied</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.jobData.map(n => {
            return (
              <TableRow key={n._id}>
                <TableCell component="th" scope="row">
                  {n.company.name}
                </TableCell>
                <TableCell>{n.company.jobTitle}</TableCell>
                <TableCell>{n.state}</TableCell>
                <TableCell>{n.appliedDate}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
