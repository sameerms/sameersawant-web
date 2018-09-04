import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SameerSawant_v1 from "../img/SameerSawant_v1.jpg";

const styles = {
 

  bigAvatar: {
    width: 105,
    height: 165,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
     
     
     <Avatar
        alt="Sameer Sawant"
        src= {SameerSawant_v1}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
      
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);