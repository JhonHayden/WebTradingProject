import React from 'react'  
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

const PrivateLayout = ({children}) => {
    return (
        <div className='flex flex-col justify-between h-screen '>
            <Navbar/>
            <div className='h-full'>
                <main className='h-full'>
                    {children}  
                    PrivateLayout 
                </main>
                <Footer/>
            </div>    

        </div>
    )
}

export default PrivateLayout
