import { Container } from '@chakra-ui/react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { VisibilityFilter } from './components/VisibilityFilter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar1';

function App() {
  return (
    <>
    <Navbar1 my="14"/>
    <Container maxW="container.sm">
      <br/>
      <AddTodo />
      <VisibilityFilter />
      <TodoList />
    </Container>
    </>
  );
}

export default App;
