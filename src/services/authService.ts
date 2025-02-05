const URL_BASE = 'https://empleatetubackendmio.onrender.com/'
export const loginUser = async (email: string, password: string) => {
    try{
        const response = await fetch(URL_BASE + 'api/auth/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {email, password} ),
                credentials: 'include'
            }
        )
        if(!response.ok){
            throw new Error('Error al iniciar sesión')
        }
        return await response.json()

    }catch(error){
        const msg = error instanceof Error ? error.message : 'Error desconocido'
        throw new Error(msg)
    }
}
export const registerUser = async (email: string, password: string, confirmPassword: string) => {
    try{
        const response = await fetch(URL_BASE + 'api/auth/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {email, password, confirmPassword} ),
                credentials: 'include'
            }
        )
        if(!response.ok){
            throw new Error('Error al registrarse')
        }
        return await response.json()

    }catch(error){
        const msg = error instanceof Error ? error.message : 'Error desconocido'
        throw new Error(msg)
    }
}
