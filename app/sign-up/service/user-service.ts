const API_URL = 'http://localhost:3000/api/v1'; // Ajusta el puerto según tu configuración de Rails

export interface User {
  id?: number;
  name: string;
  company: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const createUser = async (userData: User) => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userData }),
    });

    if (!response.ok) {
      throw new Error('Error creating user');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};