const API_URL = 'http://localhost:3333';

export const saveCustomerData = async (customerData: {
  customer: { name: string; url: string; validateContract: boolean };
  site: { name: string; cnpj: string; observation: string };
  user: { email: string; cpf: string; dateExpiration: Date };
}) => {
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
