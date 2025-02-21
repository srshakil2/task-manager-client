import { useContext, useEffect, useState } from "react";
import useAllTaskGet from "../../Hooks/useAllTaskGet";
import { MainContext } from "../../Providers/AuthContext";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Todo from "./Todo";

const Task = () => {
  const [todoItem, setTodoItem] = useState([]);
  const [inprogressItem, setInprogressItem] = useState([]);
  const [doneItem, setDoneItem] = useState([]);

  const { user } = useContext(MainContext);
  const [data, refetch] = useAllTaskGet(
    `http://localhost:5000/alltask?email=${user?.email}`
  );
  //   console.log(todoItem);
  //   console.log(inprogressItem);
  //   console.log(doneItem);

  //
  useEffect(() => {
    const filterTodo = data.filter((item) => item.role === "todo");
    setTodoItem(filterTodo);
    const filterInprogress = data.filter((item) => item.role === "inprogress");
    setInprogressItem(filterInprogress);
    const filterdone = data.filter((item) => item.role === "done");
    setDoneItem(filterdone);
  }, [data]);

  //
  const handleDragEnd = () => {
    // if (!result.destination) return; // If dropped outside, do nothing
    // const newItems = [...items];
    // const [movedItem] = newItems.splice(result.source.index, 1);
    // newItems.splice(result.destination.index, 0, movedItem);
    // setItems(newItems);
  };
  //
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center mt-5">
        <img
          className="h-[80px]"
          src="https://img.icons8.com/?size=128&id=3qwzQjAQr9Zi&format=png"
          alt="task"
        />
        <h4 className="text-4xl font-bold ml-3">Task Management Board</h4>
      </div>
      <h2 className="text-2xl font-bold text-center mb-4">Drag & Drop</h2>
      {/* main parent dnd */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-10 md:px-7 px-5">
        {/* dndtodo */}
        <div className="p-4 bg-purple-100 rounded-lg">
          <p className="text-center text-2xl font-bold mb-5">To-Do</p>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable-list">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="space-y-4 "
                >
                  {todoItem.map((item, index) => (
                    <Draggable
                      key={item._id}
                      draggableId={item._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="card bg-base-200 p-3 shadow-lg flex items-center"
                        >
                          <Todo item={item}></Todo>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        {/* dnd inprogress */}
        <div className="p-4 rounded-lg bg-lime-100">
          <p className="text-center text-2xl font-bold mb-5">In Progress</p>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable-list">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="space-y-4"
                >
                  {inprogressItem.map((item, index) => (
                    <Draggable
                      key={item._id}
                      draggableId={item._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="card bg-base-200 p-3 shadow-lg flex items-center"
                        >
                          <Todo item={item}></Todo>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        {/* dnd inprogress */}
        {/* dnd done */}
        <div className=" p-4 rounded-lg bg-green-100">
          <p className="text-center text-2xl font-bold mb-5">Done</p>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable-list">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="space-y-4"
                >
                  {doneItem.map((item, index) => (
                    <Draggable
                      key={item._id}
                      draggableId={item._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="card bg-base-200 p-3 shadow-lg flex items-center"
                        >
                          <Todo item={item}></Todo>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        {/* dnd done */}
      </div>
    </div>
  );
};

export default Task;
