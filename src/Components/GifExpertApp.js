import React, { useState } from 'react'
/* importamos react y el hook useState */
import { AddCategory } from './AddCategory';
/* importamos el componente AddCategory */
import GifGrid from './GifGrid';
/* importamos el componete GifGrid */

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Goku"]);
    /* creamos el hook useState, y mediante su f setCategories para asiganr las categorias */

   /*  const handleAdd = () =>{
         setCategories([...categories , "hola"]); 
         setCategories( cats => [...cats, "hola"]);  
        usando un callback donde el primer argumento (el primer cats) es 
        pasado como parametro a lo que se devolverá mas el string "hola" 
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            {/* usamos el componente AddCategory y le mandamos un props que hace referencia
            a la funcion de setCategories del hook useState */}
            
            <hr />
            {/* <button onClick={handleAdd} >Agregar</button> */}
            
            <ol>
                { categories.map( categories => {
                    return <GifGrid 
                                key={categories}
                                category={categories} 
                                /*  mandamos un props(category) haciendo 
                                referencia a lo que hay en categories */
                            />
                } ) }
                {/* una vez que ya temenos las categorias, mapeamos las categories
                    donde retornaremos el componente GifGrid con key del categories     
                */}
            </ol>
        </>
    )
}

export default GifExpertApp;
