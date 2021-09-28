import React from 'react'

const AuthLayout = ({Children}) => {
    return (
        <div>
            <header><h1>AuthLayout</h1></header>

            <Children/>

            <footer></footer>

            
        </div>
    )
}

export default AuthLayout
