// src/services/adviseService.ts

import { Advise } from '../models/Advise';

const API_URL = '/api/auth/advises'; // Ajusta la URL según el backend

export const getAdvises = async (): Promise<Advise[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Error al obtener las sugerencias');
    const data: Advise[] = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error al obtener las sugerencias: ' + error);
  }
};

export const createAdvise = async (name: string, email: string, message: string): Promise<Advise> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });
    if (!response.ok) throw new Error('Error al crear la sugerencia');
    const newAdvise: Advise = await response.json();
    return newAdvise;
  } catch (error) {
    throw new Error('Error al crear la sugerencia: ' + error);
  }
};
