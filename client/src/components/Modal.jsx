import React from 'react';
import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import MyForm from './Form.jsx';
import DialogContent from '@material-ui/core/DialogContent';


class MyModal extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    const {open, handleClose} = this.props;
    return (
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth={true}>
        <DialogTitle>
          <Typography variant="h4" component="h2">
            Checkout
          </Typography>
        </DialogTitle>
        <DialogContent>
          <MyForm />
        </DialogContent>

      </Dialog>
    )
  }
}

export default MyModal;