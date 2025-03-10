export const fetchAPI = async (endPoint: string, options = {}) => {
  try {
      const response = await fetch(endPoint, options);

      // Si la respuesta es 401 (sesión expirada), redirigir a la página de login
      if (response.status === 401) {
          // Puedes eliminar la sesión si es necesario aquí también
          window.location.href = "/login"; // Redirigir a login
          throw new Error("Sesión expirada. Inicia sesión nuevamente");
      }

      const jsonData = await response.json();
      if (!response.ok) {
          if (jsonData.error) {
              throw jsonData.error;
          } else if (jsonData.message) {
              throw jsonData.message;
          } else {
              throw { error: jsonData };
          }
      }

      return jsonData;
  } catch (error) {
      console.error("Error:", error);
      throw error;
  }
};
