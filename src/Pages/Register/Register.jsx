import { Link } from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar'

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        console.log(from);
        
    }
  return (
    <div>
        <Navbar></Navbar>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-3/4 lg:w-1/2 max-w-md text-center">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">Register your account</h2>
    <form onSubmit={handleRegister}>
      <fieldset className="space-y-5">
        <div className="text-left">
          <label className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <label className="block mb-2 text-sm font-medium text-gray-700">Photo URL</label>
          <input
            type="photo URL"
            placeholder="Enter your photo URL"
            required
            name="photo"
            className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <label className="block mb-2 text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="text-left">
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            name="password"
            className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className='text-gray-700 mt-3.5'>
            <input type="checkbox" defaultChecked className="checkbox checkbox-neutral mr-3" required />
            Accept Term & Conditions
          </div>
          
        </div>
        <div className="text-right">
          <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
        </div>
        <button
          type="submit"
          className="w-full py-3 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </fieldset>
    </form>
    <h4 className="text-gray-700 mt-4">All Ready Have An Account ? <Link to="/login" className="font-bold text-red-500">Login</Link></h4>
  </div>
</div> 
    </div>
  )
}

export default Register