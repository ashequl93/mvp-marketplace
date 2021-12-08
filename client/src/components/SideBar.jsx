import React from 'react';
import LocalTaxiOutlinedIcon from '@material-ui/icons/LocalTaxiOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import ToysOutlinedIcon from '@material-ui/icons/ToysOutlined';
import DirectionsRunOutlinedIcon from '@material-ui/icons/DirectionsRunOutlined';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const styles = (theme) => ({
  uploadBtn: {
    width: '100%',
    marginTop: '50px',
  },
  categoyLabel: {
    paddingLeft: '10px',
    paddingTop: '20px'
  }
})

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    const categories = [
      'Vehicles',
      'Property Rentals',
      'Family',
      'Electronics',
      'Hobbies',
      'Home Improvement Supply',
      'Toys & Games',
      'Sporting Goods',
      'Pet Supplies',
    ];
    const categoryIcons = {
      'Vehicles': <LocalTaxiOutlinedIcon />,
      'Property Rentals': <HomeOutlinedIcon />,
      'Family': <FavoriteBorderOutlinedIcon />,
      'Electronics': <PhoneAndroidOutlinedIcon />,
      'Hobbies': <BorderColorOutlinedIcon />,
      'Home Improvement Supply': <BuildOutlinedIcon />,
      'Toys & Games': <ToysOutlinedIcon />,
      'Sporting Goods': <DirectionsRunOutlinedIcon />,
      'Pet Supplies': <PetsOutlinedIcon />
    }
    return (
      <React.Fragment>
      <Divider />
      <Button
        variant="contained"
        color="primary"
        startIcon={<CloudUploadIcon />}
        size="large"
        className={classes.uploadBtn}
      >
        Upload Your Item
      </Button>
      <Divider />
      <Typography variant="h5" className={classes.categoyLabel}>
        Categories
      </Typography>
          <List>
          {categories.map((category, index) => (
            <ListItem button key={category}>
              <ListItemIcon>{categoryIcons[category]}</ListItemIcon>
              <ListItemText primary={<Typography variant="h6"> {category} </Typography>} />
            </ListItem>
          ))}
          </List>
          <Divider />
      </React.Fragment>
    )
  }
}

export default withStyles(styles, {withTheme: true})(SideBar);