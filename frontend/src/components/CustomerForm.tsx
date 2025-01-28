export default function CustomerForm() {
  return (
    <div className="mb-6 p-2 border-2 border-red-600">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="customer-name"
            name="customer[name]"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter customer name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">URL</label>
          <input
            type="url"
            id="customer-url"
            name="customer[url]"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter customer URL"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Validate Contract
          </label>
          <input
            type="checkbox"
            id="customer-validate-contract"
            name="customer[validateContract]"
            className="mt-2 h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  );
}
