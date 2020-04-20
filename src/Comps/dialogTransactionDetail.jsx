import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { API_URL_HEROKU } from '../Helpers/apiurl';
import '../CSS/userprofilepage.css';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const renderDialogContent = () => {
        return props.detail.map((val, index) => {
            return (
                <DialogContent className="dialog-history-wrapper">

                    <DialogContent>
                        <img
                            src={API_URL_HEROKU + `${val.image}`}
                            alt="profile pic"
                            style={{ display: 'flex', width: '150px' }}
                        />
                        <DialogContentText>
                            {val.name} size {val.size}
                        </DialogContentText>
                        <DialogContentText>
                            {val.brands}
                        </DialogContentText>
                    </DialogContent>
                    <DialogContent style={{ display: 'flex' }} >
                        <DialogContentText>
                            {val.qty} product
                    </DialogContentText>
                        <DialogContentText style={{ display: 'flex' }}>
                            | Price Rp {new Intl.NumberFormat(['ban', 'id']).format(val.price)}
                        </DialogContentText>
                        <DialogContentText style={{ display: 'flex' }}>
                            | Total Price Rp {new Intl.NumberFormat(['ban', 'id']).format(val.total_price)}
                        </DialogContentText>

                    </DialogContent>
                </DialogContent>
            )
        })
    }

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
                <DialogTitle id="alert-dialog-slide-title">{"Your Item/s"}</DialogTitle>
                {renderDialogContent()}
                <DialogContent>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.close} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

