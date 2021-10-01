import React from 'react'

const Login = () => {
    return (
        <div>pagina de login 
            <h1>Iniciar sesión </h1>
            <form >
                <div>
                    <input type='email' placeholder='Correo electrónico'/>
                    <input type="password" required />
                </div>           
            </form>
        </div>
    )
}
     
export default Login
