import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextProps {
  user: any;
  isAdmin: boolean;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  handleLogin: (email: string, password: string) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;

const fetchUser = async () => {
  const token = localStorage.getItem("accessToken");
  if (!token) throw new Error("No autenticado");

  const response = await fetch(API_URL_BASE + "/user", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Error al cargar el usuario");

  return await response.json(); // Suponemos que la API devuelve { id, name, email, isAdmin }
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await fetchUser();
        setUser(userData);
        setIsAuthenticated(true);
        setIsAdmin(userData.isAdmin || false);
      } catch {
        setIsAuthenticated(false);
        setUser(null);
        setIsAdmin(false);
      }
    };

    loadUser();
  }, []);

  const login = (token: string) => {
    console.log("📌 Guardando token en localStorage:", token);
    localStorage.setItem("accessToken", token);
    setIsAuthenticated(true);
    loadUserAfterLogin();
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    setUser(null);
    setIsAdmin(false);
  };

  const loadUserAfterLogin = async () => {
    try {
      const userData = await fetchUser();
      setUser(userData);
      setIsAdmin(userData.isAdmin || false);
    } catch {
      setUser(null);
      setIsAdmin(false);
    }
  };

  // 🔥 Agregar función handleLogin aquí 🔥
  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch(API_URL_BASE + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("🔍 Respuesta completa del backend:", data); // ✅ Verificar la estructura real de la respuesta
  
      if (data.token) {
        console.log("✅ Token recibido:", data.token);
        login(data.token);
      } else {
        console.error("❌ El backend no devolvió un token");
      }
    } catch (error) {
      console.error("Error en el login:", error);
    }
  };
  
  

  return (
    <AuthContext.Provider value={{ user, isAdmin, isAuthenticated, login, logout, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de AuthProvider");
  }
  return context;
};
