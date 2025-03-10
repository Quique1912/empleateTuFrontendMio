import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextProps {
  user: any;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

// Especificamos que "children" es un ReactNode (puede ser cualquier cosa que se pase como contenido dentro del componente)
interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const fetchUser = async () => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    throw new Error('No autenticado');
  }

  const response = await fetch('/api/user', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Error al cargar el usuario');
  }

  const data = await response.json();
  return data;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => { // Aquí usamos React.FC y AuthProviderProps
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await fetchUser();
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    loadUser();
  }, []);

  const login = (token: string) => {
    localStorage.setItem('accessToken', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children} {/* Esto es lo que se renderiza dentro del provider */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de AuthProvider');
  }
  return context;
};
