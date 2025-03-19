"use client";

import { postAPI } from "@/services/fetchAPI";
import { useState } from "react";

const TodoCreate = () => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = async () => {
    if (!todo.trim()) return;
    const newTodo = await postAPI(todo);
    if (newTodo) setTodo((prev) => [...prev, newTodo]);
    setTodo("");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-15">
      <h1 className="text-[#014FB6] font-bold text-5xl tracking-wide mb-15">
        Medyanes Todo App
      </h1>
      <label className="font-semibold text-lg">Todo Ekle</label>
      <div className="container w-full border border-[#014FB6] rounded-lg flex justify-between mt-2">
        <input
          type="text"
          value={todo}
          placeholder="Prisma öğrenilecek..."
          onChange={(e) => setTodo(e.target.value)}
          className=" p-4 outline-none w-full"
        />
        <div className="flex items-center justify-center space-x-4 pr-4">
          <button
            className="px-6 py-2 w-23 bg-green-500 rounded-md cursor-pointer"
            onClick={handleAddTodo}
          >
            Ekle
          </button>
          <button className="px-6 py-2 w-23 bg-red-500 text-white rounded-md cursor-pointer">
            Sil
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCreate;
