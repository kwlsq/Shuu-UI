import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import {
    getUserDetail,
    storeImage,
    uploadImage
} from '../Redux/Actions';
import { API_URL_1 } from '../Helpers/apiurl';
import '../CSS/userprofilepage.css';

class UserProfilePage extends React.Component {
    componentDidMount() {
        this.props.getUserDetail()
    }

    onClickUploadImage = () => {
        if (this.props.editProfileInputs.image) {
            this.props.uploadImage(this.props.editProfileInputs)
            console.log(this.props.editProfileInputs.image)
        } else {
            alert('Please Choose a File')
        }
    }
    render() {
        return (
            <div className="user-profile-page-wrapper">
                <div className="left-nav-wrapper">
                    NAV HERE
                </div>
                <h3 className="edit-profile-header">
                    <i className="fas fa-user" style={{ marginRight: 10 }}></i>
                    {this.props.user.username}</h3>
                <div className="edit-profile-wrapper">
                    <div className="edit-image-wrapper">
                        <img
                            src={API_URL_1 + this.props.userDetail.profilepic}
                            alt="profile picture"
                            width="100%"
                            height="auto"
                            style={{ maxWidth: '300px' }} />
                        <form action="/profile" method="post" enctype="multipart/form-data" style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
                            <input type="file" name="avatar" onChange={(e) => this.props.storeImage(e.target.files[0])} />
                            <input type="button" value="Upload" onClick={this.onClickUploadImage} />
                        </form>
                    </div>
                    <div className="profile-detail-wrapper">
                        <h5 style={{ borderBottom: 'solid 3px black' }}>Personal Profile</h5>
                        <p>First Name : {this.props.userDetail.first_name}</p>
                        <p>Last Name : {this.props.userDetail.last_name}</p>
                        <p>Date of Birth : {moment(this.props.userDetail.birth_date).format("YYYY-MM-DD")}</p>
                        <p>Gender :
                            {
                                this.props.userDetail.gender === 'F'
                                    ?
                                    ' Female'
                                    :
                                    'Male'
                            }
                        </p>
                        <h5 style={{ borderBottom: 'solid 3px black' }}>Contact</h5>
                        <p >
                            Email : {this.props.userDetail.email}
                            {
                                this.props.user.verified == 1
                                    ?
                                    <i className="far fa-check-circle"
                                        style={{
                                            marginLeft: 10,
                                            // paddingLeft: 5,
                                            // paddingRight: 5,
                                            borderRadius: 15,
                                            // fontFamily: 'Raleway',
                                            // marginRight: 10,
                                            color: 'green',
                                            backgroundColor: '#aaf0b8'
                                        }} />
                                    :
                                    <div />
                            }
                        </p>
                        <h5 style={{ borderBottom: 'solid 3px black', width: '600px' }}>Address</h5>
                        <p>Country : Indonesia</p>
                        <p>Province : {this.props.userDetail.province}</p>
                        <p>City : {this.props.userDetail.city}</p>
                        <p>Detail : {this.props.userDetail.address_detail}</p>

                        <button>Edit Profile</button>
                        {/* <TextField
                            label="First Name"
                            type='text'
                            defaultValue="First Name"
                            // value={this.props.userDetail.first_name}
                            // InputProps={{ inputProps: { min: 0, max: `${this.props.products.productDetail.stock}` } }}
                            // onChange={(e) => this.props.onChangeQty(e.target.value)}
                            variant="outlined"
                            size="small"
                            style={{ minWidth: 100 }}
                        /> */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ user, editProfileInputs }) => {
    return {
        user,
        userDetail: user.userDetail,
        editProfileInputs
    }
}

export default connect(mapStateToProps, { getUserDetail, storeImage, uploadImage })(UserProfilePage);
