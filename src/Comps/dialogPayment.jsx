import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';


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
                        Transfer to this Bank Account: <br />
                        Vincentius 123 456 789 333 Mandiri Bank
                    </DialogContentText>
                </DialogContent>
                <DialogContent>
                    <form action="/profile" method="post" encType="multipart/form-data" style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
                        <input type="file" name="avatar" onChange={(e) => props.storeReceipt(e.target.files[0])} />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.close} color="primary">
                        Cancel
                    </Button>

                    {
                        props.receipt
                            ?
                            <Link to='/payment'>
                                <Button onClick={() => props.uploadReceipt(props.receipt, props.payment)} color="primary">
                                    Confirm
                                </Button>
                            </Link>
                            :
                            <Button disabled >
                                Confirm
                            </Button>

                    }

                </DialogActions>
            </Dialog>
        </div>
    );
}
