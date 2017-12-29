import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class BlogDialog extends React.Component {

  constructor() {
    super()
    this.state = {open: false, title: "", message: ""}
  }

  componentDidMount(){
    this.setState({
        title: this.props.title,
        message: this.props.message,
    })
  }
  
  abacate = () => {
    alert('asdasdasd');
  }

  handleClickOpen = () => {
    let newState = this.state;
    newState.open = true;
    this.setState(newState);
  };

  handleClose = () => {
    let newState = this.state;
    newState.open = false;
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>
        Slide in alert dialog
        </Button>
          <Dialog
            open={this.state.open}
            transition={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
            {this.state.title}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                {this.state.message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
      </div>
    );
  }
}

export default BlogDialog;