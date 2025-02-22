import { Dialog, DialogPanel } from "@headlessui/react";
import axios from "axios";
import { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FcEditImage } from "react-icons/fc";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const Todo = ({ item, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [singelData, setSingelData] = useState({});
  // handel delete btn
  const hanselDelet = (id) => {
    // console.log("id is--------", id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/deleteitem?id=${id}`)
          .then((res) => {
            // console.log(res.data);
            if (res.data?.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your data has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  //   handel edit func

  const handelUpdateData = (id) => {
    axios
      .get(`http://localhost:5000/taskdataupdate/${id}`)
      .then((res) => {
        setSingelData(res.data);
        setIsOpen(true);
      })
      .catch(() => {
        // console.log(err)
      });
  };

  //   modal fucn

  const handelUpdate = (e, _id) => {
    e.preventDefault();
    // console.log(_id, "update info");
    const form = e.target;
    const taskTitel = form.titel.value;
    const description = form.info.value;
    const selec = form.selected.value;

    //
    axios
      .patch(`http://localhost:5000/taskdataupdate/update/${_id}`, {
        taskTitel: taskTitel,
        description: description,
        selecet: selec,
      })
      .then((res) => {
        // console.log(res.data);
        if (res?.data?.modifiedCount === 1) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "data update success",
            showConfirmButton: false,
            timer: 1000,
          });
          refetch();
        }
        setIsOpen(false);
      })
      .catch(() => {
        // console.log(err.message)
      });
  };
  return (
    <div>
      <p className="card-title text-wrap">{item?.title.slice(0, 50)}</p>
      <p className="text-wrap mt-4">{item.drescription.slice(0, 200)}</p>
      <div className="flex justify-between mt-3 mb-3">
        <p>Created Date: {item.date}</p>
        <p className="uppercase">{item.role}</p>
      </div>
      <div className="card-actions justify-end">
        <button
          onClick={() => handelUpdateData(item?._id)}
          className="btn btn-primary"
        >
          <FcEditImage />
          Edit
        </button>
        <button
          onClick={() => hanselDelet(item?._id)}
          className="btn btn-error"
        >
          <AiTwotoneDelete />
          Delete
        </button>
      </div>
      {/* modal */}
      <div>
        {/* modal Update for uniq id */}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex justify-center  md:mt-24 mt-8 mb-10 ">
            <DialogPanel className=" shadow-2xl rounded-xl bg-white p-12 ">
              <form
                onSubmit={(e) => handelUpdate(e, singelData?._id)}
                className=" "
              >
                <p className="text-3xl font-bold text-center mb-4">
                  UpDate Task
                </p>
                {/* form data */}
                {/* marathon titel */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-lg font-semibold text-black">
                      Titel
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={singelData?.title}
                    name="titel"
                    className="input input-bordered mt-2"
                  />
                </div>
                {/* info */}
                <div className="form-control mb-5">
                  <label className="label">
                    <span className="label-text text-lg font-semibold text-black">
                      Description
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered mt-2"
                    defaultValue={singelData?.drescription}
                    name="info"
                  ></textarea>
                </div>
                {/* selected */}
                <div className="mb-5">
                  <label className="text-black text-lg font-semibold">
                    Selected
                  </label>
                  <select
                    name="selected"
                    className="select select-bordered w-full max-w-xs mt-2"
                  >
                    <option value={"todo"} selected>
                      To-Do
                    </option>
                    <option value={"inprogress"}>In-progress</option>
                    <option value={"done"}>Done</option>
                  </select>
                </div>
                {/* btn form submit */}
                <div className="flex gap-4 items-center justify-center mt-5">
                  <button
                    type="submit"
                    // onClick={() => setIsOpen(false)}
                    className="btn text-white text-xl  bg-indigo-500 hover:bg-indigo-700"
                  >
                    Update Now
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </Dialog>
        {/*  */}
      </div>
    </div>
  );
};

export default Todo;
