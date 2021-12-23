import React, {useEffect, useState} from 'react';
/* importamos react */
import PropTypes from 'prop-types';
import { useFechGifs } from '../Hooks/useFechGifs';
import { GifItems } from './GifItems';
/* importamos los propTypes */

const GifGrid = ( {category} ) => {
    /* recibimos el props y hacemos la desestructurizacion de ella */
    const {data, loading} = useFechGifs( category );

    return (
        <>
            <h3 className='animate__animated animate__flash' > {category} </h3>

            { loading && 'Cargando...'  }

            <div className='card-grid' >
                {
                    data.map( img => {
                    return <GifItems 
                                    key={img.id}
                                    {...img}
                                />
                        //return <li key={img.id}> {img.title} </li> 
                    })
                }  
            </div> 
        </>
        /* retornamos el category en un h3 */
    );
}

GifGrid.propTypes = {
    category: PropTypes.string
}

export default GifGrid;
