import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoNew from "./TodoNew";

type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    let initialValue: Todo[] = [];
    const todoList = window.localStorage.getItem("todos");
    if (todoList && todoList.length > 0) {
      initialValue = JSON.parse(todoList);
    }
    return initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleCreateTodo = (todoText: string) => {
    const oldTodos = [...todos];
    oldTodos.push({
      id: Math.floor(Math.random() * 10000000),
      text: todoText,
      isCompleted: false,
    });
    setTodos(oldTodos);
  };

  const handleDeleteTodo = (todoId: number) => {
    let updatedTodos = [...todos];
    let selectedTodoIdx = todos.findIndex((todo) => todo.id === todoId);
    updatedTodos.splice(selectedTodoIdx, 1);
    setTodos(updatedTodos);
  };

  const handleComplete = (todoId: number) => {
    // clone the original array to avoid mutate by reference
    let updatedTodos = [...todos];
    // find the todo based on todo id
    let selectedTodo = todos.find((todo) => todo.id === todoId);
    // find the todo index based on todo id
    let selectedTodoIdx = todos.findIndex((todo) => todo.id === todoId);

    if (selectedTodo) {
      updatedTodos[selectedTodoIdx] = {
        ...selectedTodo,
        isCompleted: !selectedTodo.isCompleted,
      };
      setTodos(updatedTodos);
    }
  };

  return (
    <Container
    mt='10'
      maxW="container.sm"
      backgroundColor="gray.200"
      p="10"
      borderRadius='10'
    >
      <Stack spacing="5">
        <Box>
          <Heading>ToDo</Heading>
        </Box>
        <Box>
          <TodoNew createTodo={handleCreateTodo} />
        </Box>
        <Box>
          <Text fontSize="md">
            You have {todos.filter((it) => it.isCompleted === false).length}{" "}
            pending task(s)
          </Text>
        </Box>
        <Stack spacing="2">
          {todos
            .filter((it) => it.isCompleted === false)
            .map((it) => (
              <TodoItem
                key={it.id}
                item={it}
                deleteTodo={handleDeleteTodo}
                complete={handleComplete}
              />
            ))}
        </Stack>
        <Stack spacing="2">
          {todos
            .filter((it) => it.isCompleted === true)
            .map((it) => (
              <TodoItem
                key={it.id}
                item={it}
                deleteTodo={handleDeleteTodo}
                complete={handleComplete}
              />
            ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default TodoList;
