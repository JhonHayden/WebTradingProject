import Footer from 'components/Footer'
import React from 'react'


const AuthLayout = ({ children }) => {
    return (
        <div className='  flex flex-col justify-between  h-screen bg-blue-200 items-center'>
            <main className='h-full'>
                {children}
            </main>
            <Footer />


        

        </div>
        // <div className='flex flex-col justify-between overflow-scroll h-screen items-center 
        // justify-items-center bg-blue-200'>
        //     <main  className='h-full'>
        //         PublicLayout
        //         {children}
        //     </main>                
        //     <Footer/>
        // </div>
    )
}

export default AuthLayout
