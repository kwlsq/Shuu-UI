import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControl from '@material-ui/core/FormControl';
import moment from 'moment';
import {
    getUserDetail,
    storeImage,
    uploadImage,
    onClickBtnEditProfile,
    onChangeEditFirstName,
    onChangeEditLastName,
    onChangeEditBirthDate,
    onChangeGender,
    getProvinceLists,
    getCityLists,
    onChangeEditProvince,
    onChangeEditCity,
    // onChangeEditEmail,
    onChangeEditAddressDetail,
    onBtnSaveEdit,
    onBtnCancelEdit
} from '../Redux/Actions';
import { API_URL_1 } from '../Helpers/apiurl';
import '../CSS/userprofilepage.css';

class UserProfilePage extends React.Component {
    componentDidMount() {
        this.props.getUserDetail()
    }

    onClickUploadImage = () => {
        if (this.props.editProfileInputs.image) {
            this.props.uploadImage(this.props.editProfileInputs, this.props.userDetail.ud_id)
            console.log(this.props.editProfileInputs.image)
        } else {
            alert('Please Choose a File')
        }
    }

    onClickBtnEdit = () => {
        this.props.getProvinceLists()
        this.props.onClickBtnEditProfile()
        this.props.getCityLists()
    }

    onChangeProvince = (val) => {
        console.log(val)
        this.props.onChangeEditProvince(val)
        this.props.getCityLists(val.province_id)

    }

    onBtnSaveEdit = () => {
        let {
            firstNameEdit,
            lastNameEdit,
            birthDateEdit,
            genderEdit,
            // emailEdit,
            provinceEdit,
            cityEdit,
            addressDetailEdit
        } = this.props.editProfileInputs

        let {
            first_name,
            last_name,
            // birth_date,
            gender,
            // email,
            // verified,
            province,
            city,
            address_detail
        } = this.props.userDetail
        if (firstNameEdit === '' || firstNameEdit === undefined) {
            firstNameEdit = first_name
        }
        if (lastNameEdit === '' || lastNameEdit === undefined) {
            lastNameEdit = last_name
        }
        // if (!birthDateEdit.isValid) {
        //     birthDateEdit = moment(birth_date).format("YYYY-MM-DD")
        // }
        //ada bug, harus isi date, kalau ga diisi, nanti saat dikosongin dan disave, akan keisi tanggal hari ini, lalu percobaan kedua bakal error
        if (genderEdit === '' || genderEdit === undefined) {
            genderEdit = gender
        }
        // if (emailEdit === '') {
        //     emailEdit = email
        // } else if (emailEdit !== '' && emailEdit !== email) {
        //     verified = 0
        // } butuh button dan action baru untuk insert email dan verified ke table users

        if (provinceEdit === '' || cityEdit === undefined) {
            provinceEdit = province
        } else {
            provinceEdit = provinceEdit.province
        }
        if (cityEdit === '' || cityEdit === undefined) {
            cityEdit = city
        } else {
            cityEdit = cityEdit.city_name
        }
        if (addressDetailEdit === '' || addressDetailEdit === undefined) {
            addressDetailEdit = address_detail
        }
        this.props.onBtnSaveEdit({
            first_name: firstNameEdit,
            last_name: lastNameEdit,
            birth_date: moment(birthDateEdit).format("YYYY-MM-DD"),
            gender: genderEdit,
            // email: emailEdit,
            province: provinceEdit,
            city: cityEdit,
            address_detail: addressDetailEdit,
            // verified
        }, this.props.userDetail.ud_id)
    }

    renderEditProfile = () => {
        if (this.props.editProfileInputs.openEdit) {
            return (
                <div>
                    <div className="profile-detail-wrapper">
                        <h5 style={{ borderBottom: 'solid 3px black' }}>Personal Profile</h5>
                        <TextField
                            label="First Name"
                            type='text'
                            placeholder={this.props.userDetail.first_name}
                            value={this.props.editProfileInputs.firstNameEdit}
                            onChange={(e) => this.props.onChangeEditFirstName(e.target.value)}
                            variant="outlined"
                            size="small"
                            style={{ maxWidth: 400, marginBottom: 10 }}
                        />
                        <TextField
                            label="Last Name"
                            type='text'
                            placeholder={this.props.userDetail.last_name}
                            value={this.props.editProfileInputs.lastNameEdit}
                            onChange={(e) => this.props.onChangeEditLastName(e.target.value)}
                            variant="outlined"
                            size="small"
                            style={{ maxWidth: 400, marginBottom: 10 }}
                        />
                        <TextField
                            type='date'
                            defaultValue={moment(this.props.userDetail.birth_date).format("YYYY-MM-DD")}
                            onChange={(e) => this.props.onChangeEditBirthDate(e.target.value)}
                            variant="outlined"
                            size="small"
                            style={{ maxWidth: 400, marginBottom: 10 }}
                        />
                        <FormControl style={{ maxWidth: 400, marginBottom: 10 }}>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                defaultValue={'DEFAULT'}
                                onChange={(e) => this.props.onChangeGender(e.target.value)}
                            >
                                <option value="DEFAULT" disabled>Gender </option>
                                <option value="M">Male </option>
                                <option value="F">Female </option>
                            </Select>
                        </FormControl>
                        <h5 style={{ borderBottom: 'solid 3px black' }}>Contact</h5>
                        <p >
                            Email : {this.props.userDetail.email}
                            {
                                this.props.user.verified === 1
                                    ?
                                    <i className="far fa-check-circle"
                                        style={{
                                            marginLeft: 10,
                                            borderRadius: 15,
                                            color: 'green',
                                            backgroundColor: '#aaf0b8'
                                        }} />
                                    :
                                    <div />
                            }
                        </p>
                        {/* <TextField
                            label="Email"
                            placeholder={this.props.userDetail.email}
                            type='email'
                            value={this.props.editProfileInputs.emailEdit}
                            onChange={(e) => this.props.onChangeEditEmail(e.target.value)}
                            variant="outlined"
                            size="small"
                            style={{ maxWidth: 400, marginBottom: 10 }}
                        /> */}
                        <h5 style={{ borderBottom: 'solid 3px black', width: '600px' }}>Address</h5>
                        <p>Country : Indonesia</p>
                        <Autocomplete
                            options={this.props.editProfileInputs.provinceList}
                            onChange={(event, value) => this.onChangeProvince(value)}
                            getOptionLabel={option => option.province}
                            style={{ maxWidth: 400, marginBottom: 10 }}
                            renderInput={params =>
                                <TextField
                                    // placeholder={this.props.userDetail.province}
                                    {...params}
                                    label="Province"
                                    variant="outlined"
                                />}
                        />
                        <Autocomplete
                            options={this.props.editProfileInputs.cityList}
                            getOptionLabel={option => `${option.type} ${option.city_name}`}
                            onChange={(event, value) => this.props.onChangeEditCity(value)}
                            style={{ maxWidth: 400, marginBottom: 10 }}
                            renderInput={params =>
                                <TextField
                                    {...params}
                                    // placeholder={this.props.use/rDetail.city}
                                    label="City"
                                    variant="outlined"
                                />}
                        />
                        <TextField
                            label="Address Detail"
                            multiline
                            placeholder={this.props.userDetail.address_detail}
                            rows="4"
                            value={this.props.editProfileInputs.addressDetailEdit}
                            style={{ maxWidth: 400, marginBottom: 10 }}
                            variant="outlined"
                            onChange={(e) => this.props.onChangeEditAddressDetail(e.target.value)}
                        />
                        <button onClick={this.onBtnSaveEdit}>Save Changes</button>
                        <button onClick={this.props.onBtnCancelEdit}>Cancel Edit</button>
                    </div>
                </div>
            )
        } else {
            return (
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
                                ' Male'
                        }
                    </p>
                    <h5 style={{ borderBottom: 'solid 3px black' }}>Contact</h5>
                    <p >
                        Email : {this.props.userDetail.email}
                        {
                            this.props.user.verified === 1
                                ?
                                <i className="far fa-check-circle"
                                    style={{
                                        marginLeft: 10,
                                        borderRadius: 15,
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

                    <button onClick={this.onClickBtnEdit}>Edit Profile</button>
                </div>
            )
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
                            alt="profile pic"
                            width="100%"
                            height="auto"
                            style={{ maxWidth: '300px' }} />
                        <form action="/profile" method="post" encType="multipart/form-data" style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
                            <input type="file" name="avatar" onChange={(e) => this.props.storeImage(e.target.files[0])} />
                            <input type="button" value="Upload" onClick={this.onClickUploadImage} />
                        </form>
                    </div>
                    {this.renderEditProfile()}
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

export default connect(mapStateToProps, {
    getUserDetail,
    storeImage,
    uploadImage,
    onClickBtnEditProfile,
    onChangeEditFirstName,
    onChangeEditLastName,
    onChangeEditBirthDate,
    onChangeGender,
    getProvinceLists,
    getCityLists,
    onChangeEditProvince,
    onChangeEditCity,
    // onChangeEditEmail,
    onChangeEditAddressDetail,
    onBtnSaveEdit,
    onBtnCancelEdit
})(UserProfilePage);
