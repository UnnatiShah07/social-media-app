import { useNavigate } from "react-router-dom";
import { Loader, PasswordInput } from "../../components";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/slices/authSlice";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("Username is required"),
  name: Yup.string().required("Full name is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Confirm password do not with password")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.authReducer);

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="h-auto w-80 sm:w-96 border p-5 text-center overflow-hidden">
        <p className="mb-5 font-caveat text-3xl font-bold">Artist's Showcase</p>
        <Formik
          initialValues={{
            email: "",
            username: "",
            name: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            const { email, name, username, password } = values;
            dispatch(signupUser({ email, name, username, password }))
              .unwrap()
              .then(() => navigate("/"))
              .catch(() => {});
          }}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <>
              <input
                type="text"
                placeholder="Full name"
                value={values.name}
                onChange={handleChange("name")}
              />
              {errors.name && touched.name && (
                <p className="error-text">{errors.name}</p>
              )}
              <input
                type="text"
                placeholder="Username"
                value={values.username}
                onChange={handleChange("username")}
              />
              {errors.username && touched.username && (
                <p className="error-text">{errors.username}</p>
              )}
              <input
                type="text"
                placeholder="Email"
                value={values.email}
                onChange={handleChange("email")}
              />
              {errors.email && touched.email && (
                <p className="error-text">{errors.email}</p>
              )}
              <PasswordInput
                placeholder={"Password"}
                value={values.password}
                onChange={handleChange("password")}
              />
              {errors.password && touched.password && (
                <p className="error-text">{errors.password}</p>
              )}
              <div className="my-2">
                <PasswordInput
                  placeholder={"Confirm password"}
                  value={values.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="error-text">{errors.confirmPassword}</p>
                )}
              </div>

              <button onClick={handleSubmit}>Signup</button>
            </>
          )}
        </Formik>
        <p className="text-sm my-1" onClick={() => navigate("/login")}>
          Have an account?{" "}
          <span className="text-primary font-semibold">Login</span>
        </p>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default SignUp;
