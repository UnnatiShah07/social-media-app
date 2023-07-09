import { useNavigate } from "react-router-dom";
import { Loader, PasswordInput } from "../../components";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/slices/authSlice";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Fisrt name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Confirm password do not match with password")
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
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            const { email, firstName, lastName, username, password } = values;
            dispatch(
              signupUser({ email, firstName, lastName, username, password })
            )
              .unwrap()
              .then(() => navigate("/"))
              .catch(() => {});
          }}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="First name"
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                />
              </div>
              <div className="flex gap-2">
                {errors.firstName && touched.firstName && (
                  <p className="error-text w-6/12">{errors.firstName}</p>
                )}
                {errors.lastName && touched.lastName && (
                  <p className="error-text w-6/12">{errors.lastName}</p>
                )}
              </div>
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
