// import login from "../../../src/assets/images/login";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Login = () => {

	const [error, setError] = useState('')
	const {signInUser} = useContext(AuthContext);
	const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
	signInUser(email, password)
	.then(result=>{
		const loggedUser = result.user;
		console.log(loggedUser);
		form.reset()
		navigate('/')
	})
	.catch(error=>{
		setError(error.message)
	})
  };

  return (
    <div className=" md:flex space-x-5 justify-between items-center p-16 ">
      <div className="md:w-1/2">
        <img className="max-w-xs " src={login} alt="" />
      </div>

      <div className="md:w-1/2 p-8">
        <h1 className="text-3xl font-bold text-gray-700 tracking-widest uppercase mb-5">
          Login
        </h1>
        <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"

                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="text-yellow-500"></p>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Login</button>
              </div>
              <p>
                Have you any account?
                <Link to="/register">
                  <button className="btn btn-link">Go to register</button>
                </Link>
              </p>
              
              <button ><p  className="text-gray-600 font-bold border text-center bg-yellow-300 p-2 rounded-lg">  Sign In With Google</p></button>
             <button><p className="text-gray-600 font-bold border text-center bg-yellow-300 p-2 rounded-lg">  Sign In With GitHub</p></button>
            </form>
      </div>
    </div>
  );
};

export default Login;
