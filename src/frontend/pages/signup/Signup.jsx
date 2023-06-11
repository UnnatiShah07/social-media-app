import { useNavigate } from "react-router-dom";
import { PasswordInput } from "../../components";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="h-auto w-80 sm:w-96 border p-5 text-center overflow-hidden">
        <p className="mb-5 font-caveat text-3xl font-bold">Artist's Showcase</p>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Full name" />
        <PasswordInput placeholder={"Password"} />
        <div className="my-2"><PasswordInput placeholder={"Confirm password"} /></div>
        <button>Signup</button>
        <p className="text-sm my-1" onClick={() => navigate("/login")}>
          Have an account?{" "}
          <span className="text-primary font-semibold">Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
