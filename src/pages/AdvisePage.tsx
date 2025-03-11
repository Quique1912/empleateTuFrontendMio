import { useState } from 'react';
import AdviseList from './AdviseList';
import AdviseForm from './AdviseForm';


function AdvisePage() {
  const [view, setView] = useState<'list' | 'form'>('list');

  return (
    <div className="max-w-lg mx-auto p-6">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setView('list')}
          className={`px-4 py-2 rounded-lg ${view === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Ver Sugerencias
        </button>
        <button
          onClick={() => setView('form')}
          className={`px-4 py-2 rounded-lg ${view === 'form' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Nueva Sugerencia
        </button>
      </div>

      {view === 'list' ? <AdviseList /> : <AdviseForm onSuccess={() => setView('list')} />}
    </div>
  );
}

export default AdvisePage;
