import { Container, Stack } from '@chakra-ui/react'
import { TodoForm, TodoList } from './components'

function App() {

  return (
    <Stack h="100vh">
      <Container >
        <TodoForm />
        <TodoList />
      </Container>
    </Stack>
  )
}

export default App
