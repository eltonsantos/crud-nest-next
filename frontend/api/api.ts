const API_URL = 'http://localhost:3333';

async (customerData: { name: string; email: string; password: string }) => {
  try {
    const response = await fetch(`${API_URL}/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerData),
    });

    if (!response.ok) {
      throw new Error('Error registering customer');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error registering customer:', error);
    throw error;
  }
};
