import { Input } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

interface TodoNewProps {
  createTodo: (todoText: string) => void;
}
const TodoNew = ({ createTodo }: TodoNewProps) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(todoText);
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={todoText}
        placeholder="New Task"
        onChange={(e) => setTodoText(e.target.value)}
      />
    </form>
  );
};

export default TodoNew;
