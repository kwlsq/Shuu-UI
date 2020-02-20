import React from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { verify } from '../Redux/Actions'

class VerificationPage extends React.Component {
    state = {}

    componentDidMount() {
        // console.log(this.props.location)
        // console.log(this.props.location.search)
        var params = queryString.parse(this.props.location.search)
        // console.log(params)
        // console.log(params.username)
        // console.log(params.password)
        this.props.verify(params.username, params.password)
    }

    render() {
        return (
            <div>
                <h3>Your email has been verified</h3>
                <h5 onClick={() => console.log('xx')}>Resend Verification</h5>

            </div>
        )
    }
}

export default connect(null, { verify })(VerificationPage);