import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-red-800 border-gray-200 shadow-md w-full">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../src/assets/logo.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold text-white">Quique19</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2">Get started</button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-red-700 rounded-lg bg-red-900 md:flex-row md:mt-0 md:border-0 md:bg-red-800">
            <li><Link to="/" className="block py-2 px-3 text-white hover:bg-red-700 rounded-md">Home</Link></li>
            <li><Link to="/login" className="block py-2 px-3 text-white hover:bg-red-700 rounded-md">Login</Link></li>
            <li><Link to="/register" className="block py-2 px-3 text-white hover:bg-red-700 rounded-md">Registro</Link></li>
            <li><Link to="/profile" className="block py-2 px-3 text-white hover:bg-red-700 rounded-md">Profile</Link></li>
            <li><Link to="/userList" className="block py-2 px-3 text-white hover:bg-red-700 rounded-md">Usuarios</Link></li>
            <li><Link to="/offers" className="block py-2 px-3 text-white hover:bg-red-700 rounded-md">Ofertas</Link></li>
            <li><Link to="/categories" className="block py-2 px-3 text-white hover:bg-red-700 rounded-md">Categorias</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar