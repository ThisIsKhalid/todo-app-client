import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

interface TodoItemProps {
  item: Todo;
  deleteTodo: (id: number) => void;
  complete: (id: number) => void;
}

const TodoItem = ({ item, deleteTodo, complete }: TodoItemProps) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  return (
    <Box
      backgroundColor="gray.900"
      px="5"
      py="2"
      borderRadius="5"
      onMouseEnter={() => setShowDeleteBtn(true)}
      onMouseLeave={() => setShowDeleteBtn(false)}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Checkbox
          colorScheme="green"
          isChecked={item.isCompleted}
          // checked={item.isCompleted}
          onChange={() => complete(item.id)}
        >
          {item.isCompleted ? (
            <Text color='white' fontSize="lg" textDecoration="line-through">
              {item.text}
            </Text>
          ) : (
            <Text color='white' fontSize="lg">{item.text}</Text>
          )}
        </Checkbox>
        {showDeleteBtn && (
          <AiOutlineDelete onClick={() => deleteTodo(item.id)} color="white" />
        )}
      </Flex>
    </Box>
  );
};

export default TodoItem;
