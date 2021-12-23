import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Goku"]);

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
            <hr />
            {/* <button onClick={handleAdd} >Agregar</button> */}
            <ol>
                { categories.map( categories => {
                    return <GifGrid 
                                key={categories}
                                category={categories}
                            />
                } ) }

                {/*    categories.map( categories => {
                        return <li key={categories} > {categories} </li>
                    })
                */} 
            </ol>
        </>
    )
}

export default GifExpertApp;
