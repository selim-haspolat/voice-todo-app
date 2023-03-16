import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";

const Login = () => {
  const { setCurrentUser, signUpProvider, signWithGithub } = useAuthContext();

  const navigate = useNavigate();

  const handleGoogle = () => {
    signUpProvider(navigate);
  };

  const handleGithub = () => {
    signWithGithub(navigate);
  };

  useEffect(() => {
    setCurrentUser(false);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-5">
      <button className="flex items-center gap-2 border border-slate-700 rounded px-3 py-1  w-40 bg-blue-50 hover:bg-white transition-colors" onClick={handleGoogle}>
        <FcGoogle className="text-2xl" />
        Login With Google
      </button>
      <button className="flex items-center gap-2 border border-slate-700 rounded px-3 py-1 w-40 bg-blue-50 hover:bg-white transition-colors" onClick={handleGithub}>
        <GoMarkGithub className="text-2xl"/>
        Login with Github
      </button>
    </div>
  );
};

export default Login;
