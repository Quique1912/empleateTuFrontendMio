const API_URL_BASE = import.meta.env.VITE_API_URL_BASE

export async function fetchAPI(url: string, options: RequestInit) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error en fetchAPI:", error);
      throw error;
    }
  }
