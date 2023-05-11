import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };
  // const navItems = <>
  {
    /* <li className="font-semibold uppercase tracking-wider"><Link to='/'>Home</Link></li>
      <li className="font-semibold uppercase tracking-wider"><Link>About</Link></li>
      {
        user?  <li onClick={handleLogout} className="font-semibold uppercase tracking-wider"><Link to='/login'>logout</Link></li>
        :  <li className="font-semibold uppercase tracking-wider"><Link to='/login'>Login</Link></li>
      
      }
      */
  }

  // </>

  return (
    <div className="navbar bg-base-100 h-24 mb-6 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* {navItems} */}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* {navItems} */}

          <li className="font-semibold uppercase tracking-wider">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold uppercase tracking-wider">
            <Link>About</Link>
          </li>

          {user ? (
            <>
              <li className="font-semibold uppercase tracking-wider text-teal-500">
            <Link to='/bookings'>Bookings</Link>
          </li>
              <li
                onClick={handleLogout}
                className="font-semibold uppercase tracking-wider"
              >
                <Link to="/">logout</Link> <p>{user?.email}</p>
              </li>
            </>
          ) : (
            <li className="font-semibold uppercase tracking-wider">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        <button className="btn btn-outline btn-warning">appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
