import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from './AppBar.jsx';
import SideBar from './SideBar.jsx';
import Main from './Main.jsx';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import IndividualCategory from './IndividualCategory.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const styles = () =>  ({
  appbar: {

  },
  sidebar: {
    minHeight: '100vh',
    marginRight: '20 px'
  },
  mainBody: {
    marginLeft: '50 px',
    backgroundColor: 'red',
  }
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    }
  }

  componentDidMount(){
    axios.get('/products')
      .then((productList) => {
        this.setState({
          productList: [...productList.data]
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    const { classes } = this.props;
    const { productList } = this.state;
    return (
      <React.Fragment>
        <Router>
        <Grid container>
          <Grid item xs={12} className={classes.appbar}>
            <AppBar />
          </Grid>
          <Grid item md={3} className={classes.sidebar}>
            <SideBar />
          </Grid>
            <Routes>
            <Route path="/"
                element={
                  <Grid item md={9} >
                  <Box m={3} >
                    <Main productList={productList}/>
                  </Box>
                </Grid>
                }
            />
            <Route path="/:category"
              element={
                <Grid item md={9} >
                <Box m={3} >
                  <IndividualCategory productList={productList}/>
                </Box>
              </Grid>
              }
            />
            </Routes>
        </Grid>
        </Router>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(HomePage);