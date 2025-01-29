"use client";

import CustomerForm from "@/components/CustomerForm"
import SiteForm from "@/components/SiteForm"
import UserForm from "@/components/UserForm"
import { saveCustomerData } from "../../../api/api";
import { useState } from "react";

interface CustomerData {
  customer: {
    name: string;
    url: string;
    validateContract: boolean;
  };
  site: {
    name: string;
    cnpj: string;
    observation: string;
  };
  user: {
    email: string;
    cpf: string;
    dateExpiration: string;
  };
};

export default function Customers() {
  const [customerData, setCustomerData] = useState<CustomerData>({
    customer: {
      name: '',
      url: '',
      validateContract: false
    },
    site: {
      name: '',
      cnpj: '',
      observation: ''
    },
    user: {
      email: '',
      cpf: '',
      dateExpiration: new Date().toISOString()
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const [section, field] = name.split('[').map((s) => s.replace(']', '')) as [keyof CustomerData, string];

    setCustomerData((prevState: typeof customerData) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = {
      ...customerData,
      customer: {
        ...customerData.customer,
        validateContract: !!customerData.customer.validateContract,
      },
      user: {
        ...customerData.user,
        dateExpiration: new Date(customerData.user.dateExpiration),
      }
    };
  
    try {
      const data = await saveCustomerData(formData);
      console.log('Customer registered:', data);
    } catch (error) {
      console.error('Error registering customer:', error);
    }
  };

  return (
    <>
      <div>Cadastro de clientes</div>
      <form onSubmit={handleSubmit}>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          
          <CustomerForm handleInputChange={handleInputChange} customerData={customerData.customer} />

          <SiteForm handleInputChange={handleInputChange} siteData={customerData.site} />
          
          <UserForm handleInputChange={handleInputChange} userData={customerData.user} />
          
          <div className="text-right">
            <button type="submit" className="px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Submit</button>
          </div>
        </div>
      </form>
    </>
  )
}