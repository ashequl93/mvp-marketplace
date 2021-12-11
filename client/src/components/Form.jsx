import React from 'react';
import TextField from '@material-ui/core/TextField';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <TextField id="standard-basic" label="Credit Card Number" variant="outlined" fullWidth/>
        <br />
        <TextField id="standard-basic" label="Expiry Date" variant="outlined"/>
        <br />
        <TextField id="standard-basic" label="Security Code" variant="outlined"/>
      </form>
    )
  }
}

export default MyForm;