"use client";

import { deleteAPI, getAPI, updateAPI } from "@/services/fetchAPI";
import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editTodoId, setEditTodoId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");

  useEffect(() => {
    const fetchTodo = async () => {
      const data = await getAPI();
      setTodos(data);
    };
    fetchTodo();
  }, []);

  const handleDeleteTodo = async (id) => {
    const success = await deleteAPI(id);
    if (success) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const handleUpdateTodo = async (id) => {
    if (!updatedTitle.trim()) return;

    const updatedTodo = await updateAPI(id, { title: updatedTitle });

    if (updatedTodo) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, title: updatedTodo.title } : todo
        )
      );
      setEditTodoId(null);
    }
  };

  const handleEditClick = (id, currentTitle) => {
    setEditTodoId(id);
    setUpdatedTitle(currentTitle);
  };

  return (
    <div className="container mx-auto">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="w-full border border-[#014FB6] rounded-lg flex items-center justify-between p-4 my-4 hover:bg-[#c0d4ee] hover:transition-all"
        >
          {editTodoId === todo.id ? (
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              className="border p-2 rounded-md w-7/9 outline-none "
            />
          ) : (
            <span>{todo.title}</span>
          )}

          <div className="flex items-center space-x-4">
            {editTodoId === todo.id ? (
              <button
                className="px-6 py-2 bg-green-500 text-white rounded-md cursor-pointer w-23"
                onClick={() => handleUpdateTodo(todo.id)}
              >
                Güncelle
              </button>
            ) : (
              <button
                className="px-6 py-2 bg-[#014FB6] text-white rounded-md cursor-pointer"
                onClick={() => handleEditClick(todo.id, todo.title)}
              >
                Düzenle
              </button>
            )}

            <button
              className="px-6 py-2 w-23 bg-red-500 text-white rounded-md cursor-pointer"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Sil
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
