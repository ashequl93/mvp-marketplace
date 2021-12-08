import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from './AppBar.jsx';
import SideBar from './SideBar.jsx';
import Main from './Main.jsx';

const styles = () =>  ({
  appbar: {

  },
  sidebar: {
    minHeight: '100vh'
  },
  mainBody: {
    backgroundColor: 'pink'
  }
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={12} className={classes.appbar}>
            <AppBar />
          </Grid>
          <Grid item md={3} className={classes.sidebar}>
            <SideBar />
          </Grid>
          <Grid item md={9} className={classes.mainBody}>
          < Typography variant="h3">
                Main Items
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(HomePage);