"use client";

import { getAPI } from "@/services/fetchAPI";
import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const data = await getAPI();
      setTodos(data);
    };
    fetchTodo();
  }, []);

  return (
    <div className="container mx-auto">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="w-full border border-[#014FB6] rounded-lg flex items-center justify-between p-4 my-2"
        >
          <span>{todo.title}</span>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-[#014FB6] text-white rounded-md">
              Düzenle
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md">
              Sil
            </button>
          </div>
        </div>
      ))}

      {/* <input
        type="text"
        placeholder="Prisma öğrenilecek..."
        className=" p-4  outline-none"
      />
      <div className="flex items-center justify-center space-x-4 pr-4">
        <button className="px-6 py-2 bg-[#014FB6] rounded-md text-white">
          Düzenle
        </button>
        <button className="px-6 py-2 bg-red-500 text-white rounded-md">
          Sil
        </button>
      </div> */}
    </div>
  );
};

export default TodoList;
