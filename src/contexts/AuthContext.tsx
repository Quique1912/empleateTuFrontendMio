import { createContext, useContext, useEffect, useState } from "react";
import { AuthService } from "../services/authService";

const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;

interface UserPayload {
    id: number;
    email: string;
    role: string;
}

interface AuthContextType {
    user: UserPayload | null;
    isAuthenticated: boolean;
    isAdmin: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const defaultAuthContext: AuthContextType = {
    user: null,
    isAuthenticated: false,
    isAdmin: false,
    login: async () => {},
    logout: async () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserPayload | null>(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(`${API_URL_BASE}/auth/user`, { credentials: "include" });
                if (!response.ok) throw new Error("No autenticado");
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Error al cargar el usuario:", error);
                setUser(null);
            }
        }
        fetchUser();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const userData = await AuthService.loginUser(email, password); // Suponiendo que devuelve los datos del usuario
            setUser(userData);
        } catch (error) {
            console.error("Error en el login:", error);
            throw new Error("Error en el login");
        }
    };

    const logout = async () => {
        try {
            await fetch(`${API_URL_BASE}/auth/logout`, { method: "POST", credentials: "include" });
            setUser(null);
        } catch (error) {
            console.error("Error en el logout:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, isAdmin: user?.role === "admin" }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
