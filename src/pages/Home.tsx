const Home = () => {
  return (
    <div className="bg-gray-800 text-white p-8">
      {/* Sección de Introducción */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Bienvenido a GameZone</h2>
        <p className="text-xl text-gray-400">Explora los mejores juegos, últimas noticias y mucho más.</p>
      </section>

      {/* Juegos Destacados */}
      <section>
        <h3 className="text-3xl font-bold text-center mb-8">Juegos Destacados</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Juego 1 */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <img
              src="/images/game1.jpg"
              alt="Juego 1"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl">Juego Épico 1</h4>
            <p className="text-gray-400 mt-2">Una aventura épica llena de acción.</p>
          </div>
          {/* Juego 2 */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <img
              src="/images/game2.jpg"
              alt="Juego 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl">Juego Épico 2</h4>
            <p className="text-gray-400 mt-2">Explora mundos abiertos y combates desafiantes.</p>
          </div>
          {/* Juego 3 */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <img
              src="/images/game3.jpg"
              alt="Juego 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl">Juego Épico 3</h4>
            <p className="text-gray-400 mt-2">Lucha por la supervivencia en este intenso juego.</p>
          </div>
        </div>
      </section>

      {/* Categorías Populares */}
      <section className="my-16">
        <h3 className="text-3xl font-bold text-center mb-8">Categorías Populares</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h4 className="text-xl">Acción</h4>
            <p className="text-gray-400 mt-2">Juegos llenos de adrenalina y combate.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h4 className="text-xl">Aventura</h4>
            <p className="text-gray-400 mt-2">Explora y resuelve enigmas en estos juegos.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h4 className="text-xl">Deportes</h4>
            <p className="text-gray-400 mt-2">Compite en los mejores juegos deportivos.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h4 className="text-xl">Estrategia</h4>
            <p className="text-gray-400 mt-2">Desarrolla tus habilidades tácticas y gana.</p>
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section>
        <h3 className="text-3xl font-bold text-center mb-8">Últimas Noticias</h3>
        <div className="bg-gray-900 p-6 rounded-lg">
          <h4 className="text-xl">¡Nuevo Lanzamiento!</h4>
          <p className="text-gray-400 mt-2">Un nuevo juego ha llegado al mercado. ¡No te lo pierdas!</p>
          <a href="/" className="text-indigo-500 hover:underline mt-2 inline-block">Leer más</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
