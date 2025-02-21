import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { MainContext } from "../../Providers/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const SingUp = () => {
  const [userName, setUserName] = useState("");
  const { handelSingUp } = useContext(MainContext);
  const navigate = useNavigate();

  // handel name fild
  const hendelName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Todu:
  const onSubmit = (data) => {
    // console.log(data);
    const userData = {
      id: data?.email,
      name: userName,
      email: data?.email,
      photoUrl: data?.photoUrl,
    };
    const password = data?.password;

    // console.log(userData);
    handelSingUp(userData.email, password)
      .then(() => {
        axios
          .post("http://localhost:5000/users", userData)
          .then((res) => {
            if (res.data?.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Sing Up Success",
                showConfirmButton: false,
                timer: 1000,
              });
              navigate("/");
            }
          })
          .catch(() => {
            // console.log(err);
          });
      })
      .catch(() => {
        // console.log();
      });
  };

  return (
    <div className="hero min-h-screen ">
      <div className="card bg-base-100 shrink-0 shadow-2xl md:w-6/12">
        <div className="text-center mt-10 md:w-1/2 mx-auto">
          <p className="w-full text-3xl font-bold">Sing Up Now</p>
        </div>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          {/* frist name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Frist Name</span>
            </label>

            <input
              type="text"
              onKeyUp={(e) => hendelName(e)}
              placeholder="Frist Name"
              {...register("fristname", { required: true })}
              className="input input-bordered w-full"
            />

            {errors?.fristname && (
              <span className="text-sm text-red-500">
                Frist name is required
              </span>
            )}
          </div>

          {/* photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              {...register("photoUrl", { required: true })}
              className="input input-bordered w-full"
            />
            {errors?.photoUrl && (
              <span className="text-sm text-red-500">
                Photo Url is required
              </span>
            )}
          </div>
          {/* Email */}
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
              Sing Up
            </button>
          </div>
        </form>
        {/* Log in page link */}
        <div>
          <p className="px-7 pb-4 -mt-5 font-semibold">
            You Have an account pless?
            <Link
              to={"/login"}
              className="text-lg ml-3 underline underline-offset-8"
            >
              LogIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
