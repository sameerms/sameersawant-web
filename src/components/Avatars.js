import React from 'react';
import '../images/SameerSawant_v1.jpg';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';


const styles = {
 

  bigAvatar: {
    width: 105,
    height: 165,
  },
};

function ImageAvatars(props) {
  const { classes, logoUrl } = props;
  
  return (
    <div className={classes.row}>
     
     
     <Avatar
        alt="Sameer Sawant"
        src= {require('../images/SameerSawant_v1.jpg')}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
      
    </div>
  );
}



export default withStyles(styles)(ImageAvatars);