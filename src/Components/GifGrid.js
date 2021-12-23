import React from 'react';
import PropTypes from 'prop-types'

const GifGrid = ( {category} ) => {
    return (
        <>
            <h3> {category} </h3>            
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string
}

export default GifGrid;
