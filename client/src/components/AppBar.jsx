import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { alpha, withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({

});

class AppBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h4" component="h2">
              Logo
          </Typography>
        </Grid>
        <Grid item>
          <TextField
          // className={classes.margin}
          id="input-with-icon-textfield"
          size="medium"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="large" />
              </InputAdornment>
            ),
          }}
          />
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <Typography>
                Mario
              </Typography>
            </Grid>
            <Grid item>
              <Avatar src="/mario.png" style ={ { height: '60px', width: '60px'}} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(AppBar);