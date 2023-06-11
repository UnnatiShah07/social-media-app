import { useNavigate } from "react-router-dom";
import { mobilePost } from "../../assets";
import { PasswordInput } from "../../components";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row items-center justify-evenly flex-wrap">
      <div class="w-full sm:w-1/2 hidden sm:flex justify-end">
        <img src={mobilePost} alt="welcomeImage" className="h-96 px-10" />
      </div>
      <div className="w-full sm:w-1/2 h-screen flex flex-col justify-center items-center sm:items-start sm:h-screen sm:p-10">
        <div className="h-auto w-80 sm:w-96 border p-5 text-center">
          <p className="mb-5 font-caveat text-3xl font-bold">
            Artist's Showcase
          </p>
          <input type="text" placeholder="Username" />
          <PasswordInput placeholder={"Password"} />
          <button>Login</button>
          <button className="secondary-btn">Login as a Guest</button>
          <p className="text-sm my-5" onClick={() => navigate("/signup")}>
            Don't have an account?{" "}
            <span className="text-primary font-semibold">Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
