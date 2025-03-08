

function Footer() {
  return (
    <footer className="bg-red-900 shadow-md w-full">
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white">© 2023 Quique19. Todos los derechos reservados.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white">
          <li><a href="#" className="hover:underline me-4">About</a></li>
          <li><a href="#" className="hover:underline me-4">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline me-4">Licensing</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}


export default Footer