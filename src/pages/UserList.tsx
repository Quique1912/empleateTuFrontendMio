import { useEffect, useState } from 'react';
import { UserService } from '../services/userService';

interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  role: string;
  course: string;
  active: boolean
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      try {
        const userList = await UserService.getAll();
        console.log('Usuarios obtenidos:', userList); // 🔍 Verifica la respuesta
        const activeUsers = userList.filter((user: User) => user.active); // Filtra solo los activos
        setUsers(activeUsers);
      } catch (error) {
        const msg = error instanceof Error ? error.message : 'Error desconocido';
        setMessage(msg);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);
  
  if (loading) return <div>Loading...</div>;

  return (
    <div className="relative overflow-x-auto">
      {message && <div className="text-red-500">{message}</div>}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Nombre</th>
            <th className="px-6 py-3">Apellido</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Rol</th>
            <th className="px-6 py-3">Curso</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                No hay usuarios disponibles
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.surname}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">{user.course}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
