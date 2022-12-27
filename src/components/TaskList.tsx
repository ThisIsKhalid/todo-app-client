import { Box, Container, Flex, Input, List, ListItem } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useState } from "react";

type Task = {
  id: string;
  label: string;
};

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && newTask !== "") {
      setTasks((task) => [...task, { id: nanoid(), label: newTask }]);
      setNewTask("");
    }
  };

  return (
    <Container maxW="container.md" border="1px solid red">
      <Flex height="96" alignItems="center" gap="2" justifyContent="center">
        <Box w="container.sm" border="1px solid green" p="5">
          <List fontSize="xl">
            {tasks.map((task) => (
              <ListItem key={task.id}>{task.label}</ListItem>
            ))}
          </List>
          <Input
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            mt="9"
            variant="filled"
            focusBorderColor="teal.500"
            value={newTask}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default TaskList;
