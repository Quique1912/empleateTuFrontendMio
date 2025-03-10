import { fetchAPI } from "../utils/FetchAPI";

//const URL_BASE = 'http://localhost:3000/api/'
const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;

export class UserService {
  static async getAll() {
    const token = localStorage.getItem("accessToken"); // 🔍 Obtiene el token almacenado
    if (!token) {
      throw new Error("No autenticado");
    }

    return await fetchAPI(API_URL_BASE + "/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // 🔑 Incluye el token en la solicitud
      },
      credentials: "include",
    });
  }
}


