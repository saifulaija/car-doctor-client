import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { getAuth} from "firebase/auth";



const auth = getAuth()



const Register = () => {

      

      const [error, setError] = useState('')
  const { signUp, logOut } = useContext(AuthContext);
 

  const navigate = useNavigate()

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const displayName  = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name);

    signUp(email, password)

   
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
          Register Now !
        </h1>
        <form onSubmit={handleRegister} className="card-body shadow-2xl">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="email"
              name="name"
              className="input input-bordered"
            />
          </div>
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
            <button className="btn btn-warning text-white tracking-widest">register now</button>
          </div>
          <p>
            Have you any account?
            <Link to="/Login">
              <button className="btn btn-link">Go to login</button>
            </Link>
          </p>
          <p className="text-red-500">{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
