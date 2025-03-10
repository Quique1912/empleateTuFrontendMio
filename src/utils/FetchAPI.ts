const API_URL_BASE = import.meta.env.VITE_API_URL_BASE

export const fetchAPI = async (endPoint: string, options = {}) => {
    try {
        let response = await fetch(endPoint, { ...options, credentials: "include" });

        if (response.status === 401) {
            // Intentar refrescar el token
            const refreshResponse = await fetch(`${API_URL_BASE}/auth/refresh`, {
                method: "POST",
                credentials: "include",
            });

            if (!refreshResponse.ok) throw new Error("Refresh token expired");

            // Reintentar la petición original con el nuevo token
            response = await fetch(endPoint, { ...options, credentials: "include" });
        }

        return response.json();
    } catch (error) {
        console.error("Error en fetchAPI:", error);
        throw error;
    }
};
