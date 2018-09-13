import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit,
  },
  
});

function TypographyTheme(props) {
  return <div className={props.classes.root}>{"CV"}</div>;
}



export default withStyles(styles)(TypographyTheme);