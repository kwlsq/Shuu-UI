import React from 'react';
import axios from 'axios';
import { API_URL_HEROKU } from '../Helpers/apiurl'


class StoresPage extends React.Component {
    state = {
        listBrands: []

    }
    componentDidMount() {
        axios.get(API_URL_HEROKU + '/brands/lists')
            .then((res) => {
                this.setState({ listBrands: res.data })
                console.log(this.state.listBrands)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default StoresPage;

