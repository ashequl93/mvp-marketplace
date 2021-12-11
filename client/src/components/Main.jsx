import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MyCard from './Card.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const styles = (theme) => ({
  root: {
  },
  avatar: {
    backgroundColor: 'red',
  },
  label: {
    marginBottom: '20px'
  }
})
class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    const { productList } = this.props;
    return (
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Typography variant="h5" className={classes.label}>
            Today's Pick
          </Typography>
        </Grid>
          {productList.map((product, index) => {
            return (
              <Grid item md={4} key={index}>
                <MyCard
                image = {product.image}
                price = {product.price}
                description = {product.description}
                location = {product.location}
              />
              </Grid>
            )
          })}
      </Grid>
    )
  }
}

export default withStyles(styles, {withTheme: true})(Main);