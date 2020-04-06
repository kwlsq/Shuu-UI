import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function FilterBar(props) {
    const filterMinPrice = (val) => {
        props.filterMinPrice(val)
        props.filterPrice(val, props.max)
    }

    const filterMaxPrice = (val) => {
        props.filterMaxPrice(val)
        props.filterPrice(props.min, val)
    }

    return (
        <div>
            Filter by Price:<br />
            <TextField label="Lowest Price" variant="outlined" onBlur={(e) => filterMinPrice(e.target.value)} />
            <TextField label="Highest Price" variant="outlined" onBlur={(e) => filterMaxPrice(e.target.value)} />
            Filter by Category:<br />

            Filter by Size:<br />

            Filter by Brands:<br />
        </div>
    )
}