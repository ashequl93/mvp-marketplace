import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MyCard from './Card.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
})
class IndividualCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    const { productList } = this.props;
    const filteredProductList = [];
    let currentProduct = window.location.pathname.substring(1).replaceAll('%20', ' ');
    productList.forEach((product) => {
      if (product.category === currentProduct) {
        filteredProductList.push(
          <MyCard
          image = {product.image}
          price = {product.price}
          description = {product.description}
          location = {product.location}
        />
        )
      }
    })
    return (
      <Grid container spacing={2}>
          {filteredProductList.map((product, index) => {
            return (
              <Grid item md={4} key={index}>
                {product}
              </Grid>
            )
          })}
      </Grid>
    )
  }
}

export default withStyles(styles, {withTheme: true})(IndividualCategory);