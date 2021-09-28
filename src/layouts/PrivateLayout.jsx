import React, { Children } from 'react'

const PrivateLayout = () => {
    return (
        <div>
            
            <header><h1>PrivateLayout</h1>

            </header>

            <main><Children /> </main>

            <footer>


            </footer>


        </div>
    )
}

export default PrivateLayout
