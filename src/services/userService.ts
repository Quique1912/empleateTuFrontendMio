const URL_BASE = 'https://empleatetubackendmio.onrender.com/api/user'
export const getUsers = async () => {
    try{
        const response = await fetch(URL_BASE + 'users/',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        if(!response.ok){
            throw new Error('fallo al obtener los usuario')
        }
        return await response.json()
    }catch(error){
        const msg = error instanceof Error ? error.message : 'Error desconocido'
        throw new Error(msg)
    }

}