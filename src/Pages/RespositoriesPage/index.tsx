import { Container, Main, Sidebar } from './styles'
import { Profile } from '../../Components/Profile'

export function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile />
      </Sidebar>
      <Main>
        Main
      </Main>
    </Container>
  )
}
