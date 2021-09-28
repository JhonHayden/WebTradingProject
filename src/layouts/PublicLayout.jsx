import React from 'react'

const PublicLayout = ({Children}) => {
    return (
        <div>
            <header>
                <h1>PublicLayout</h1>
            </header>
            
            <main>
                <Children />
            </main>  
            
            <footer></footer>
        </div>
    )
}

export default PublicLayout
