import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

  const {signIn} = useContext(AuthContext);
  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    console.log(email, password);

    signIn(email, password)
      .then(result => {
      console.log(result.user);
      })
      .catch(error => {
      console.log(error);
    })
  }



    return (
      <div>
        <Navbar></Navbar>
        <div>
          <h2 className="text-center font-semibold text-3xl"> Please Login</h2>
          <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
        <p className="text-center mt-4">Do not have an account Please<Link to='/register' className="text-blue-700 font-bold">Register</Link></p>
      </div>
    );
};

export default Login;