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
import { Link, Redirect } from 'react-router-dom';

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
    this.handleCategoryChoice = this.handleCategoryChoice.bind(this);
  }
  handleCategoryChoice(e) {
    window.location.href = e.target.textContent;
  }
  render() {
    const ICON_SIZE = '40px';
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
      'Vehicles': <LocalTaxiOutlinedIcon style={{fontSize: ICON_SIZE}} />,
      'Property Rentals': <HomeOutlinedIcon style={{fontSize: ICON_SIZE}} />,
      'Family': <FavoriteBorderOutlinedIcon style={{fontSize: ICON_SIZE}} />,
      'Electronics': <PhoneAndroidOutlinedIcon style={{fontSize: ICON_SIZE}} />,
      'Hobbies': <BorderColorOutlinedIcon  style={{fontSize: ICON_SIZE}} />,
      'Home Improvement Supply': <BuildOutlinedIcon style={{fontSize: ICON_SIZE}} />,
      'Toys & Games': <ToysOutlinedIcon style={{fontSize: ICON_SIZE}} />,
      'Sporting Goods': <DirectionsRunOutlinedIcon style={{fontSize: ICON_SIZE}} />,
      'Pet Supplies': <PetsOutlinedIcon style={{fontSize: ICON_SIZE}} />
    }
    return (
      <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        startIcon={<CloudUploadIcon />}
        size="large"
        className={classes.uploadBtn}
      >
        Upload Your Item
      </Button>
      <Typography variant="h5" className={classes.categoyLabel}>
        Categories
      </Typography>
          <List>
          {categories.map((category, index) => (
            <ListItem button key={category}>
              <ListItemIcon>{categoryIcons[category]}</ListItemIcon>
              <ListItemText primary={<Typography variant="h6"> {category} </Typography>} onClick={this.handleCategoryChoice}/>
            </ListItem>
          ))}
          </List>
          <Divider />
      </React.Fragment>
    )
  }
}

export default withStyles(styles, {withTheme: true})(SideBar);