import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(Sektor, Teknologi, Plattform, Utviklingsverktøy, protein) {
  id += 1;
  return { id, Sektor, Teknologi, Plattform, Utviklingsverktøy, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper classSektor={classes.root}>
      <Table classSektor={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Dessert (100g serving)</CustomTableCell>
            <CustomTableCell numeric>Teknologi</CustomTableCell>
            <CustomTableCell numeric>Plattform (g)</CustomTableCell>
            <CustomTableCell numeric>Utviklingsverktøy (g)</CustomTableCell>
            <CustomTableCell numeric>Protein (g)</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow classSektor={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.Sektor}
                </CustomTableCell>
                <CustomTableCell numeric>{row.Teknologi}</CustomTableCell>
                <CustomTableCell numeric>{row.Plattform}</CustomTableCell>
                <CustomTableCell numeric>{row.Utviklingsverktøy}</CustomTableCell>
                <CustomTableCell numeric>{row.protein}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);