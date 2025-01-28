import CustomerForm from "@/components/CustomerForm"
import SiteForm from "@/components/SiteForm"
import UserForm from "@/components/UserForm"

export default function Customers() {
  return (
    <>
      <div>Cadastro de clientes</div>
      <form action="">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          
          <CustomerForm />

          <SiteForm />

          <UserForm />
          
          <div className="text-right">
            <button type="submit" className="px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Submit</button>
          </div>
        </div>
      </form>
    </>
  )
}