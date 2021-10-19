import React from 'react'  
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import NavBarResponsive from 'components/NavBarResponsive'

const PrivateLayout = ({children}) => {
    return (
        <div className='flex flex-col justify-between h-screen '>
            <Navbar/>
            <NavBarResponsive/>
            
            <div className='h-full'>
                <main className='h-full flex justify-center bg-white'>
                    {children}  
                </main>
                <Footer/>
            </div>    

        </div>
    )
}

export default PrivateLayout
