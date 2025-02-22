import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { MainContext } from "../../Providers/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddTask = () => {
  const [uptitle, setUptitle] = useState("");
  const { user } = useContext(MainContext);
  const { register, handleSubmit } = useForm();
  const hendelTitle = (e) => {
    e.preventDefault();
    setUptitle(e.target.value);
  };
  const onSubmit = (data) => {
    const fromDataAdd = {
      title: uptitle,
      drescription: data?.drescription,
      role: data?.role,
      email: user?.email,
      date: new Date().toLocaleDateString("en-GB"),
    };
    // console.log(fromDataAdd);
    axios
      .post("http://localhost:5000/addtask", fromDataAdd)
      .then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Data save success",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch(() => {
        // console.log(err);
      });
  };

  return (
    <div className="md:w-7/12 mx-auto mt-10 min-h-screen">
      <div>
        <Helmet>
          <title>Add Task</title>
        </Helmet>
      </div>
      <div className="hero-content">
        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
          <h3 className=" text-center text-3xl font-bold mt-10">
            Add New Task
          </h3>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="font-semibold">Title</label>
              <input
                onKeyUp={(e) => hendelTitle(e)}
                className="input input-bordered w-full mt-2"
                {...register("titel")}
                required
              />
            </div>
            <br />
            {/* text aria */}
            <div className="form-control">
              <label className="font-semibold">Description</label>
              <textarea
                {...register("drescription")}
                placeholder="Bio"
                className="textarea textarea-bordered textarea-lg w-full mt-2"
                required
              ></textarea>
            </div>
            <br />
            {/* selected */}
            <div className="form-control ">
              <label className="font-semibold">Select Option</label>

              <select
                className="input input-bordered w-full mt-2"
                {...register("role")}
              >
                <option value="todo">To-Do</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
            <br />
            <div>
              <input
                className="btn w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold text-lg "
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
