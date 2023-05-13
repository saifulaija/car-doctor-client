// import login from "../../../src/assets/images/login";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import SocilaLogin from "../Shared/SocilalLogin/SocilaLogin";

const Login = () => {

	const [error, setError] = useState('')
	const {signInUser} = useContext(AuthContext);
	const navigate = useNavigate()
  const location = useLocation()
  
  const from = location.state?.from?.pathname || '/';



  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
	signInUser(email, password)
	.then(result=>{
		const user = result.user;
   
		console.log(user);
    navigate(from,{replace: true});
		
		

    // sent jwt data to db
    


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
                Are  you new to car-doctor?
                <Link to="/register">
                  <button className="btn btn-link">Go to register</button>
                </Link>
              </p>
               
                <p className="text-red-700">{error}</p>

                <p className="text-green-600 font-semibold ">Social Login</p>
                <SocilaLogin></SocilaLogin>
              
             
            </form>
      </div>
    </div>
  );
};

export default Login;
