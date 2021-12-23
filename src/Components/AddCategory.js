import React, { useState } from 'react';
/* impotamos react y el hook useState */
import PropTypes from 'prop-types';
/* importamos los propTypes */

export const AddCategory = ({setCategories}) => {
   /*  hacemos la desestructurizacion del props que recibimos */

    const [inputValue, setInputValue] = useState(' ');
    /* creamos el hook useState para asignar el valor del inputValue */

    const handleChange = (e) =>{
        setInputValue(e.target.value);
        /* cuando se ejecute la funcion handleChange, se recibe el parametro e
        en el cual buscaremos su valor en e.target.value a lo cual se mandará
        como parametro a la funcion de setInputValue*/
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(cats => [ inputValue, ...cats]);
            /* hacemos uso del props que recibimos (setCategories)
            y le pasamos como parametro otra funcion que tiene como referencia
            los valores anteriores y le agregamos el nuevo valor del inputValue.
            
            usando un callback donde el primer argumento (el primer cats) es 
            pasado como parametro a lo que se devolverá mas el string del inputValue. */
            setInputValue(' ');
            /* establecemos el inputValue con la f setInputValue a ' ' */
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            {/* al hacer submit en el form se ejecutará la funcion handleSubmit */}
            <input 
                type="text"
                value={ inputValue }
                onChange={handleChange}
                /* ponemos un input de tipo text, y tenga de valor el inputValue y que
                cuando cambie se ejecute la funcion handleChange */
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
/* al props que recibimos (setCategories) establecemos que es 
una funcion y que es requerida */
