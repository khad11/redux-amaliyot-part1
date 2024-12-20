import { useEffect } from "react";
import FormInput from "../components/FormInput";
import { Form, Link, useActionData } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
// import "../style.css";

// actions
export const action = async ({ request }) => {
  const form = await request.formData();
  const displayName = form.get("name");
  const email = form.get("email");
  const passwoord = form.get("password");
  return { displayName, email, passwoord };
};

function Register() {
  const { registerWithEmailAndPassword } = useRegister();
  const data = useActionData();
  useEffect(() => {
    if (data) {
      registerWithEmailAndPassword(
        data.displayName,
        data.email,
        data.passwoord
      );
    }
  }, [data]);
  return (
    <div className="h-screen grid place-items-center w-full ">
      <Form method="post" className="max-w-96 mx-auto w-full">
        <h2 className="text-4xl font-bold text-center mb-5 uppercase">
          Register
        </h2>
        <FormInput
          type="text"
          placeholder="Name"
          lebel="Enter your Name"
          name="name"
        />
        <FormInput
          type="email"
          placeholder="Email"
          lebel="Enter your email"
          name="email"
        />
        <FormInput
          type="password"
          placeholder="Password"
          lebel=" Password"
          name="password"
        />
        <FormInput
          type="password"
          placeholder=" Repeat Password"
          lebel="Password"
        />
        <div className="mt-5 ">
          <button
            className="btn
     btn-primary btn-block"
          >
            Register
          </button>
        </div>
        <div className="my-5 text-center">
          <p>
            If you have account ,
            <Link to="/Login" className="link link-primary">
              Login
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default Register;
