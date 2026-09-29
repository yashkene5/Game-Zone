import { useFormik } from "formik";

function Login() {

  const formik = useFormik({

    initialValues: {
      email: "",
      password: ""
    },

    validate: (values) => {

      const errors = {};

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
          values.email
        )
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password =
          "Password must contain at least 6 characters";
      }

      return errors;
    },

    onSubmit: (values) => {
      alert(
        `Login successful!\nEmail: ${values.email}`
      );

      console.log(values);
    }

  });

  return (
    <section className="form-container">

      <h1>Login</h1>

      <form onSubmit={formik.handleSubmit}>

        <label>Email</label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.email &&
          formik.errors.email && (
            <p className="error">
              {formik.errors.email}
            </p>
          )}

        <label>Password</label>

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.password &&
          formik.errors.password && (
            <p className="error">
              {formik.errors.password}
            </p>
          )}

        <button type="submit">
          Login
        </button>

      </form>

    </section>
  );
}

export default Login;