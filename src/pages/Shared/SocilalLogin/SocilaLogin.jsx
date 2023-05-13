import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";


const SocilaLogin = () => {

      const {googleSignIn}= useContext(AuthContext);

      const handleGoogleSignIn=()=>{
            googleSignIn()
           .then(result=>{
            console.log(result.user);
           })
           .catch(error=>{
            console.log(error);
           })

      }



  return (
    <div>
      <div className="divider text-green-700 font-semibold">OR</div>

      <div className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
        <FcGoogle></FcGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocilaLogin;
