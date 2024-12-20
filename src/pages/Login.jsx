import { useEffect, useState } from "react";
import FormInput from "../components/FormInput";
import { Form, Link, useActionData } from "react-router-dom";
import toast from "react-hot-toast";

// actions
export const action = async ({ request }) => {
  const form = await request.formData();
  const displayName = form.get("name");
  const email = form.get("email");
  const passwoord = form.get("password");
  return { displayName, email, passwoord };
};

function Login() {
  const data = useActionData();
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  return (
    <div className="h-screen grid place-items-center w-full">
      <Form method="post" className="max-w-96 mx-auto w-full">
        <h2 className="text-4xl font-bold text-center mb-5 uppercase">Login</h2>
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
          name="passwoord"
        />

        <div className="mt-5 ">
          <button
            className="btn
   btn-primary btn-block"
          >
            Login
          </button>
        </div>
        <div className="my-5 text-center">
          <p>
            If you don't have account ,
            <Link to="/register" className="link link-primary">
              Register
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default Login;
