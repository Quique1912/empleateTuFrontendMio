import { useState } from 'react';
const API_URL_BASE = import.meta.env.VITE_API_URL_BASE

function AdviseForm({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    try {
      const response = await fetch(API_URL_BASE+'/advises', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) throw new Error('Error al enviar la sugerencia');

      setName('');
      setEmail('');
      setMessage('');
      setSuccess(true);
      setError('');
      onSuccess(); // Llama a la función para actualizar la lista
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Enviar Sugerencia</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">¡Sugerencia enviada con éxito!</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          className="w-full p-2 mb-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          className="w-full p-2 mb-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Escribe tu sugerencia aquí..."
          className="w-full p-2 mb-2 border rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Enviar</button>
      </form>
    </div>
  );
}

export default AdviseForm;
