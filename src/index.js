import React from 'react';
import ReactDOM from 'react-dom';
/* importamos todo lo necesario para trabajar con react */
import './index.css';
/* importamos los estilos */
import GifExpertApp from './Components/GifExpertApp'
/* importamos el componete GifExpertApp */

ReactDOM.render(
  <GifExpertApp />,document.getElementById('root')
  /* primero ponemos que queremos renderizar, en este caso el componete GifExpertApp */
  /* despues  donde lo queremos renderizar, en este caso en document.getElementById('root') */
);

