import HeaderComp from "@/components/header/header";
import TodoCreate from "@/components/todo/todoCreate";
import TodoList from "@/components/todo/todoList";

export default function Home() {
  return (
    <>
      <HeaderComp />
      <TodoCreate />
      <label className="container w-full mx-auto flex items-center justify-center m-4 font-semibold text-lg">
        Todolar
      </label>
      <TodoList />
    </>
  );
}
