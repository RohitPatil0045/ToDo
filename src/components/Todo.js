import { Button, Box, Checkbox, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';
import "./TodoList.css"

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [cheked, setCheked] = useState(false);

  const handleCheked = () => dispatch(toggleTodo(todo.id));
  const handleDelete = () => dispatch(deleteTodo(todo.id));

  useEffect(() => {
    setCheked(todo.completed);
  }, [todo]);

  return (
    <Box id="cd" mb={1} bgColor="lightcoral" p={4}>
      <Checkbox onChange={handleCheked} colorScheme="teal" isChecked={cheked}>
        <Text as={todo.completed && "del"}>{todo.content}</Text>
      </Checkbox>
      <Button
          colorScheme="teal"
          float="right"
          size="sm"
          align="center"
          onClick={handleDelete}
        >Delete Todo</Button>
    </Box>
  )
}
