import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Moha Milon - Login</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content w-[95%] md:w-[70%] lg:w-[50%] xl:w-[35] 2xl:w-[30%] flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label text-red-500 font-bold hover:cursor-pointer hover:underline mt-1 active:text-red-700">
                    Forgot password?
                  </label>
                </div>
                <div className="form-control mt-1">
                  <button className="btn btn-primary">Login</button>
                </div>
                <p className=" py-4 text-green-600">
                  New in this site?{" "}
                  <NavLink
                    to="/register"
                    className="hover:underline text-blue-600 font-bold"
                  >
                    Register Now
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Login;
