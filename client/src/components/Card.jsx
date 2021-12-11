import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyModal from './Modal.jsx';

const styles = () => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

class MyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false
    }
    this.handleBuy = this.handleBuy.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({
      isModalOpened: false
    })
  }

  handleBuy() {
    this.setState({
      isModalOpened: true
    })
  }
  render() {
    const { classes, image, price, description, location } = this.props;
    return (
      <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ${price}
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" variant="outlined" onClick={this.handleBuy}>
          Buy
        </Button>
      </CardActions>
    </Card>
    <MyModal
      open={this.state.isModalOpened}
      handleClose = {this.handleClose}
    />
    </React.Fragment>
    )
  }
}
export default withStyles(styles)(MyCard);