export default function SiteForm() {
  return (
    <div className="mb-6 p-2 border-2 border-green-600">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Site</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="site-name"
            name="site[name]"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter site name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            CNPJ
          </label>
          <input
            type="text"
            id="site-cnpj"
            name="site[cnpj]"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter site CNPJ"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Observation
          </label>
          <textarea
            id="site-observation"
            name="site[observation]"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Add site observations"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
