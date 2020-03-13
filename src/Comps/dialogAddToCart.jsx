import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    return (
        <div>
            <Dialog
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.close}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Item/s Succesfully Added to Your Magnificent Cart!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Would you like to open your cart?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.close} color="primary">
                        Nope, later
                    </Button>
                    <a href='/cart'>
                        <Button onClick={props.redirect} color="primary">
                            Yes, lemme see
                     </Button>
                    </a>
                </DialogActions>
            </Dialog>
        </div>
    );
}
