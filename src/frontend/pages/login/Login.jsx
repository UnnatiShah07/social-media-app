import { useNavigate } from "react-router-dom";
import { mobilePost } from "../../assets";
import { Loader, PasswordInput } from "../../components";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.authReducer);

  const handleLoginAsGuest = () => {
    dispatch(
      loginUser({
        username: "unnati_shah",
        password: "12345678",
      })
    )
      .unwrap()
      .then(() => navigate("/"))
      .catch(() => {});
  };

  return (
    <div className="flex flex-row items-center justify-evenly flex-wrap">
      <div className="w-full sm:w-1/2 hidden sm:flex justify-end">
        <img src={mobilePost} alt="welcomeImage" className="h-96 px-10" />
      </div>
      <div className="w-full sm:w-1/2 h-screen flex flex-col justify-center items-center sm:items-start sm:h-screen sm:p-10">
        <div className="h-auto w-80 sm:w-96 border p-5 text-center">
          <p className="mb-5 font-caveat text-3xl font-bold">
            Artist's Showcase
          </p>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={(values) =>
              dispatch(loginUser(values))
                .unwrap()
                .then(() => navigate("/"))
                .catch(() => {})
            }
            validationSchema={validationSchema}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <>
                <input
                  type="text"
                  placeholder="Username"
                  value={values.username}
                  onChange={handleChange("username")}
                />
                {errors.username && touched.username && (
                  <p className="error-text">{errors.username}</p>
                )}
                <PasswordInput
                  placeholder={"Password"}
                  value={values.password}
                  onChange={handleChange("password")}
                />
                {errors.password && touched.password && (
                  <p className="error-text">{errors.password}</p>
                )}
                <button onClick={handleSubmit}>Login</button>
                <button className="secondary-btn" onClick={handleLoginAsGuest}>
                  Login as a Guest
                </button>
              </>
            )}
          </Formik>

          <p className="text-sm my-5" onClick={() => navigate("/signup")}>
            Don't have an account?{" "}
            <span className="text-primary font-semibold">Sign Up</span>
          </p>
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Login;
