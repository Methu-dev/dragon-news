import { Link, useLocation, useNavigate } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"
import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const {login} = useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email =form.get('email');
        const password = form.get('password');
        console.log(email, password);
         
        login(email, password)
        .then(result =>{
          console.log(result.user)

          // naviget
          navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
          console.error(error)
        })
    }
  return (
    <div>
        <Navbar></Navbar>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-3/4 lg:w-1/2 max-w-md text-center">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">Please Login</h2>
    <form onSubmit={handleLogin}>
      <fieldset className="space-y-5">
        <div className="text-left">
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
    <h4 className="text-gray-700 mt-4">Dont’t Have An Account ? <Link to="/register" className="font-bold text-red-500">Register</Link></h4>
  </div>
</div>

    </div>
  )
}

export default Login