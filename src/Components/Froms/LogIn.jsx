import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { MainContext } from "../../Providers/AuthContext";

const LogIn = () => {
  const { handelGoogleLogin, handelLogin } = useContext(MainContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log("data", data);
    handelLogin(data?.email, data?.password)
      .then(() => {
        // console.log(res)
      })
      .catch(() => {
        // console.log(err)
      });
  };

  //   google log in
  const googleLoginUser = () => {
    handelGoogleLogin()
      .then((res) => {
        // TODO:
        console.log(res?.user?.photoURL);
        // const userInfo = {
        //   name: res?.user?.displayName,
        //   email: res?.user?.email,
        //   photoUrl: res?.user?.photoURL,
        // };
        //  Todu:---------
        navigate("/");
      })
      .catch((err) => {
        console.log("vuya gamil", err);
      });
  };

  return (
    <div className="hero min-h-screen ">
      <div className="card bg-base-100 shrink-0 shadow-2xl md:w-6/12">
        <div className="text-center mt-10 md:w-1/2 mx-auto">
          <p className="w-full text-3xl font-bold">Log In Now</p>
          <div onClick={googleLoginUser} className="btn mt-7 md:w-1/2 mx-auto ">
            <FcGoogle className="text-3xl"></FcGoogle>
            <span className="text-xl text-nowrap">Google LogIn</span>
          </div>
        </div>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full"
            />
            {errors?.email && (
              <span className="text-sm text-red-500">
                Email field is required
              </span>
            )}
          </div>
          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/,
              })}
              className="input input-bordered w-full"
            />
            {errors?.password && (
              <span className="text-sm text-red-500">Password is required</span>
            )}
            {errors?.password?.type === "minLength" && (
              <span className="text-sm text-red-500">
                Password minimun length 6 characters
              </span>
            )}
            {errors?.password?.type === "maxLength" && (
              <span className="text-sm text-red-500">
                Password max length 20 characters
              </span>
            )}
            {errors?.password?.type === "pattern" && (
              <span className="text-sm text-red-500">
                Password has been one Uppercase and one Lowercase
              </span>
            )}
          </div>

          {/* singup btn */}
          <div className="form-control mt-6">
            <button type="submit" className="btn text-lg bg-indigo-400 w-full">
              Log In
            </button>
          </div>
        </form>
        {/* Log in page link */}
        <div>
          <p className="px-7 pb-4 -mt-5 font-semibold">
            You don&apos;t Have an account pless?
            <Link
              to={"/singup"}
              className="text-lg ml-3 underline underline-offset-8"
            >
              Sing Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
