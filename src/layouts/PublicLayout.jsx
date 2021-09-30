import React from 'react'
import Footer from 'components/Footer'

import Navbar from 'components/Navbar'


const PublicLayout = ({children}) => {  // funcion que me entrega una etiqueta personalizada  con contenido 
    // el children es una palabra reservada para indicarle que tendra contenido dentro de la etiqueta personalizada PublicLayout
    return (
        <div className='flex flex-col'>
            <Navbar />
            <main>
            PublicLayout
                {children}
            </main>                
            <Footer />
        </div>
    )
}

export default PublicLayout
