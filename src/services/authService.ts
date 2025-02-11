const API_URL_BASE = import.meta.env.VITE_API_URL_BASE
export const loginUser = async (email: string, password: string) => {
    try{
        const response = await fetch(API_URL_BASE + 'auth/register',
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
        const response = await fetch(API_URL_BASE + 'auth/register',
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
            throw new Error('Error al iniciar sesión')
        }
        return await response.json()

    }catch(error){
        const msg = error instanceof Error ? error.message : 'Error desconocido'
        throw new Error(msg)
    }
}