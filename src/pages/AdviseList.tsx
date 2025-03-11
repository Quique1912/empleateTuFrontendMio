import { useState, useEffect } from 'react';

interface Advise {
  id: number;
  name: string;
  email: string;
  message: string;
}

function AdviseList() {
  const [advises, setAdvises] = useState<Advise[]>([]);

  useEffect(() => {
    const storedAdvises = localStorage.getItem('advises');
    if (storedAdvises) {
      setAdvises(JSON.parse(storedAdvises));
    }
  }, []);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Lista de Sugerencias</h2>
      {advises.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No hay sugerencias registradas.</p>
      ) : (
        <ul className="space-y-4">
          {advises.map((advise) => (
            <li key={advise.id} className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-700">
              <p className="font-semibold text-gray-900 dark:text-white">{advise.name} ({advise.email})</p>
              <p className="text-gray-600 dark:text-gray-300">{advise.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdviseList;
