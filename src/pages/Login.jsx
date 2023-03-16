import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const { setCurrentUser, signUpProvider,signWithGithub } = useAuthContext();

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
    <div className="flex flex-col mt-10 gap-5">
      <button onClick={handleGoogle}>Login With Google</button>
      <button onClick={handleGithub}>Login with Github</button>
    </div>
  );
};

export default Login;
