import { AiTwotoneDelete } from "react-icons/ai";
import { FcEditImage } from "react-icons/fc";

/* eslint-disable react/prop-types */
const Todo = ({ item }) => {
  return (
    <div className="">
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
        <button className="btn btn-error">
          <AiTwotoneDelete />
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
