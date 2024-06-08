import { Center, Container } from '@chakra-ui/react';
import { TodoLayout, TodoForm, TodoList } from './components'

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

function App() {
  
  return (
    <Center w="100vw" h="100vh">
      <TodoLayout>
          <TodoForm />
          <TodoList />    
      </TodoLayout>      
    </Center>
  )
}

export default App
