import React from 'react'

const PublicLayout = ({Children}) => {
    return (
        <div>
            <head></head>
            
            <main>
                <Children />
            </main>  
            
            <footer></footer>
        </div>
    )
}

export default PublicLayout
