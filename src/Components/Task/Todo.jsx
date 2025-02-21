import axios from "axios";
import { AiTwotoneDelete } from "react-icons/ai";
import { FcEditImage } from "react-icons/fc";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const Todo = ({ item, refetch }) => {
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
  return (
    <div>
      <p className="card-title text-wrap">{item?.title.slice(0, 50)}</p>
      <p className="text-wrap mt-4">{item.drescription.slice(0, 200)}</p>
      <div className="flex justify-between mt-3 mb-3">
        <p>Created Date: {item.date}</p>
        <p className="uppercase">{item.role}</p>
      </div>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">
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
    </div>
  );
};

export default Todo;
