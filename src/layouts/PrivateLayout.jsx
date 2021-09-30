import React from 'react'  
import Navbar from 'components/Navbar'

const PrivateLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
                
            <main>
            {children}
                PrivateLayout 
            </main>


        </div>
    )
}

export default PrivateLayout
