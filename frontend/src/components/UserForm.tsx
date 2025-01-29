interface UserFormProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userData: {
    email: string;
    cpf: string;
    dateExpiration: Date | string;
  };
}

export default function UserForm({ handleInputChange, userData }: UserFormProps) {
  let dateExpiration = userData.dateExpiration;

  if (typeof dateExpiration === 'string') {
    dateExpiration = new Date(dateExpiration);
  }

  if (!(dateExpiration instanceof Date) || isNaN(dateExpiration.getTime())) {
    dateExpiration = new Date();
  }

  const dateValue = dateExpiration.toISOString().split('T')[0];

  return (
    <div className="mb-6 p-2 border-2 border-blue-600">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">User</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="user-email"
            name="user[email]"
            value={userData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter user email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">CPF</label>
          <input
            type="text"
            id="user-cpf"
            name="user[cpf]"
            value={userData.cpf}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter user CPF"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Date Expiration
          </label>
          <input
            type="date"
            id="user-date-expiration"
            name="user[dateExpiration]"
            value={dateValue}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  );
}
