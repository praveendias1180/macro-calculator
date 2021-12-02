import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function McDialog(props) {


  return (
    <div>
      <Dialog open={props.modelFormOpen} onClose={props.handleModalFormClose}>
        <DialogTitle>See Your Results</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your name and email below to see your results. 100% safe and secure. No spam. We promise.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleModalFormClose}>Cancel</Button>
          <Button onClick={props.handleModalFormClose}>See my results now!</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}